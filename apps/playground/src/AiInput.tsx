import { useState } from "react";

const Input = (props: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <input
    {...props}
    className="border-slate-300 dark:border-slate-800 inline-flex gap-2 items-center px-2.5 py-1.5 border text-xs rounded outline-none shadow-inner pl-7 bg-white dark:bg-slate-800 text-slate-900 placeholder:text-slate-500 dark:text-slate-300 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none w-3/4"
  />
);

const Button = (props: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: any;
}) => (
  <button
    {...props}
    type="button"
    className="loading inline-flex gap-2 items-center text-xs font-medium outline-none rounded focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 outline-none bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-900 placeholder:text-slate-500 dark:text-slate-300 dark:placeholder:text-slate-500 border shadow-sm border-slate-300 dark:border-slate-800 px-2.5 py-1.5"
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

  const askAi = async () => {
    setLoading(true);
    const res = await fetch(
      "https://la2mf9ioh9.execute-api.us-east-1.amazonaws.com/prod/ai",
      {
        method: "POST",
        body: prompt,
        headers: {
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

  return (
    <div className="flex gap-4 p-2 bg-slate-100 dark:bg-slate-700 relative">
      <Input
        value={prompt}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPrompt(e.target.value)
        }
        placeholder="What cloud infrastructure would you like to build today?"
      />
      <Button onClick={askAi}>Generate wing code</Button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
