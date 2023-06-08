import classNames from "classnames";

import { Loader } from '@wing-playground/shared/src/loader';
import { Header } from "./Header";


export interface WelcomeModalProps {
  visible: boolean;
  loading?: boolean;
  onClose: () => void;
}

export const WelcomeModal = ({visible,loading = false, onClose}: WelcomeModalProps) => {
  return (
    <div className={classNames(
      "absolute inset-0 bg-[#293443] z-50 w-full h-full flex flex-col font-sans",
      {"hidden": !visible}
      )}>
      <Header/>
      <div className="py-4 text-[#BDCECC] grow">
        <h1 className="text-3xl block font-bold pb-8">Welcome to the Winglang tutorial!</h1>
        <div className="text-lg space-y-4 text-gray-350 font-semibold">
          <span className="block">
            We’re going to quickly build a smart queue that prints its messages and stores the latest one in a bucket.
          </span>
          <span className="block">
            You'll interact with it in the embedded Wing Simulator, and then compile to AWS.
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className={classNames(
          "text-[#BDCECC] bg-[#334155]",
          "text-xs px-4 py-2 cursor-pointer",
            loading && "text-[#2AD5C1] border border-[#2AD5C1] cursor-not-allowed"
          )}
          onClick={onClose}
          disabled={loading}
        >
          {loading && <Loader size="1rem" text="LOADING" />}
          {!loading && <span>START</span>}
        </button>
      </div>
    </div>
  );
}
