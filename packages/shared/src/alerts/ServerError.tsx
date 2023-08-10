import { Alert } from "../Alert";

export const ServerErrorAlert = () => {
  return (
    <div className="grow h-full">
      <div className="max-w-3xl mx-auto">
        <Alert title="Oh no!">
          <p className={"self-center"}>
            Something’s gone wrong while loading the app.
          </p>
          <p className="self-center mt-2">
            Please{" "}
            <a
              href="#"
              className="font-medium text-red-950 dark:text-red-200 underline"
              onClick={() => location.reload()}
            >
              reload
            </a>{" "}
            or try again later.
          </p>
        </Alert>
      </div>
    </div>
  );
};
