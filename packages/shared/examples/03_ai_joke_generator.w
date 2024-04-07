/*
This is an example of how to use openai API with Wing.

It is an app that uses the openai API to generate jokes and then to translate them to different languages.
Both the original joke in English and all the translations are put in a `cloud.Bucket`.

The joke generator (Comedian class), and the translators (Translator class) use an Assistant class that is a wrapper around the openai API. The example uses the openai winglib to make the openai calls.

Once a joke is generated, it is sent to a `cloud.Topic` that the translators subscribe to.

The translators then translate the joke to different languages and put the translations in the `cloud.Bucket`.
*/

bring cloud;
bring openai;

// Wraps the openai API and asks questions with a personality given in construction
class Assistant {
  personality: str;
  openai: openai.OpenAI;

  new(personality: str) {
    this.openai = new openai.OpenAI(apiKey: "<your key here>");
    this.personality = personality;
  }

  pub inflight ask(question: str): str {
    let prompt = "you are an assistant with the following personality: {this.personality}. {question}";
    let response = this.openai.createCompletion(prompt);

    return response.trim();
  }
}

// Generates jokes and stores them in a cloud.Bucket
class Comedian {
  id: cloud.Counter;
  gpt: Assistant;
  store: cloud.Bucket;

  new (store: cloud.Bucket) {
    this.gpt = new Assistant("Stand-up comedian");
    this.id = new cloud.Counter() as "NextID";
    this.store = store;
  }

  pub inflight getJoke(topic: str): str {
    let reply = this.gpt.ask("Tell me a joke about {topic}");
    let n = this.id.inc();
    this.store.put("message-{n}.original.txt", reply);
    return reply;
  }
}

// Translates jokes received from a `cloud.Topic` and translates them to different languages.
// Stores the translated jokes in a `cloud.Bucket`
class Translator {
  new(language: str, topic: cloud.Topic, store: cloud.Bucket) {
    let gpt = new Assistant("English to ${language} translator.");
    let id = new cloud.Counter() as "NextID";

    topic.onMessage(inflight (original: str) => {
      let n = id.inc();

      log("translating joke id {n} to {language}");
      let translated = gpt.ask("Please translate the following text: {original}");
      
      store.put("{language}/message-{n}.translated.txt", translated);
      log("written joke id {n} in {language}");
    });
  }
}

// Pre-flight code to generate the bucket, the topic, the comedian, and the translators
let store = new cloud.Bucket() as "Joke Store";
let newJokeSource = new cloud.Topic() as "New Joke";

let comedian = new Comedian(store) as "Comedian";

new Translator("spanish", newJokeSource, store) as "Spanish Translator";
new Translator("hebrew", newJokeSource, store) as "Hebrew Translator";

// The main inflight function that generates a joke and publishes it to the topic
new cloud.Function(inflight () => {
  let topic = "programming languages";
  log("requesting a joke about ${topic}");
  let joke = comedian.getJoke(topic);
  log("publishing joke: ${joke}");
  newJokeSource.publish(joke);
}) as "START HERE";