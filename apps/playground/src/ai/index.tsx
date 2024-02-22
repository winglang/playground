import { uuid } from "uuidv4";
import { useEffect, useState } from "react";
import { AiIcon, FixIcon } from "./icons";
import { Button, Input } from "./ctas";

const formatCode = (code: string) => {
  let isCode = false;
  return code.split("\n").reduce((acc, line) => {
    if (line.includes("```")) {
      isCode = !isCode;

      const newLine = line.replace(/```wing/g, "").replace(/```/g, "");
      return acc ? [acc, newLine].join("\n") : newLine;
    }
    const nextLine = isCode ? line : `// ${line}`;
    return acc ? [acc, nextLine].join("\n") : nextLine;
  }, "");
};

const AI_API_URL =
  "https://t4iblpvvr4.execute-api.us-east-1.amazonaws.com/prod";

export const AiInput = ({
  onAiAnswer,
  code = "",
}: {
  onAiAnswer: (prompt: string) => void;
  code?: string;
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
    const res = await fetch(`${AI_API_URL}/ai`, {
      method: "POST",
      body: JSON.stringify({ prompt, code }),
      headers: {
        "conversation-id": sessionStorage.getItem("conversation-id")!,
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    if (res.ok) {
      onAiAnswer(formatCode(await res.text()));
    }
    setLoading(false);
    setPrompt("");
  };

  const fixCode = async () => {
    setLoading(true);
    const res = await fetch(`${AI_API_URL}/fix-code`, {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: {
        "conversation-id": sessionStorage.getItem("conversation-id")!,
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    if (res.ok) {
      onAiAnswer(formatCode(await res.text()));
    }
    setLoading(false);
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
        <h3 className="text-slate-700 dark:text-slate-500 font-semibold my-2 ">
          Use wingAi
        </h3>
        <AiIcon className="stroke-slate-600 dark:stroke-slate-500" />
      </div>

      <div className="flex gap-4">
        <div className="h-full border-r-2 dark:border-r-slate-800 border-r-slate-400  w-1/6">
          <Button onClick={fixCode}>
            Fix code <FixIcon />
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
