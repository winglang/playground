import { uuid } from "uuidv4";
import { useEffect, useState } from "react";

const AiIcon = ({ className = "" }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"w-6 h-6 " + className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </svg>
);

const FixIcon = ({ className = "" }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"w-4 h-4 " + className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
    />
  </svg>
);

const Input = (props: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <input
    {...props}
    className="border-slate-300 dark:border-slate-800 items-center px-2.5 py-1.5 border text-md rounded outline-none shadow-inner bg-white dark:bg-slate-800 text-slate-900 placeholder:text-slate-500 dark:text-slate-300 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none w-full"
  />
);

const Button = (props: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: any;
}) => (
  <button
    {...props}
    type="button"
    className="loading inline-flex gap-2 items-center text-sm font-medium outline-none rounded focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-900 placeholder:text-slate-500 dark:text-slate-300 dark:placeholder:text-slate-500 border shadow-sm border-slate-300 dark:border-slate-800 px-2.5 py-1.5 min-w-fit"
  >
    {props.children}
  </button>
);

export const AiInput = ({
  onAiAnswer,
}: {
  onAiAnswer: (prompt: string) => void;
}) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("conversation-id") === null) {
      sessionStorage.setItem("conversation-id", uuid());
    }
  }, []);

  const askAi = async () => {
    setLoading(true);
    const res = await fetch(
      "https://la2mf9ioh9.execute-api.us-east-1.amazonaws.com/prod/ai",
      {
        method: "POST",
        body: prompt,
        headers: {
          "conversation-id": sessionStorage.getItem("conversation-id")!,
          "Access-Control-Allow-Origin": "http://localhost:5173",
          "Access-Control-Allow-Credentials": "true",
        },
      },
    );
    if (res.ok) {
      const answer = await res.text();
      onAiAnswer(answer.replace(/```wing/g, "").replace(/```/g, ""));
    }
    setLoading(false);
    setPrompt("");
  };

  const restart = () => {
    sessionStorage.setItem("conversation-id", uuid());

    setPrompt("");
    onAiAnswer(
      "// Write something down to get started, or use the examples above...",
    );
  };

  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-700 relative">
      <div className="flex gap-1">
        <h3 className="text-slate-700 font-semibold my-2">Use wingAi</h3>
        <AiIcon className="stroke-slate-600" />
      </div>

      <div className="flex gap-4">
        <div className="h-full border-r-2 border-r-slate-400 w-1/6">
          <Button onClick={() => console.log("fix code")}>
            Fix code <FixIcon className="" />
          </Button>
        </div>

        <Input
          value={prompt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrompt(e.target.value)
          }
          placeholder="Or ask me to build something new..."
        />
        <Button onClick={askAi}>Generate wing code</Button>
        <Button onClick={restart}>Restart</Button>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};
