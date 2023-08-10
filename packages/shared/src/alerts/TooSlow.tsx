import { Alert } from "../Alert";

export const TooSlowAlert = () => {
  return (
    <div className="grow h-full">
      <div className="max-w-3xl mx-auto">
        <Alert title="This is taking too long">
          <p className={"self-center"}>Something may have gone wrong while loading the app.</p>
          <p className="self-center mt-2">
            Please {" "}
            <a
                href="#"
                className="font-medium text-red-950 underline"
                onClick={() => location.reload()}
            >
              reload
            </a>
            {" "}
            or try again later.
          </p>
        </Alert>
      </div>
    </div>
  )
};