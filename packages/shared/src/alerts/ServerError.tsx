import { Alert } from "../Alert";

export const ServerErrorAlert = () => {
  return (
    <div className="grow h-full">
      <div className="max-w-3xl mx-auto">
        <Alert title="Server unavailable">
          <p>Something have gone wrong while loading the app.</p>
          <p className="mt-2">
            Please, try again later or{" "}
            <a
              href="#"
              className="font-medium text-red-800 underline"
              onClick={() => location.reload()}
            >
              reload the page now
            </a>
            .
          </p>
        </Alert>
      </div>
    </div>
  )
};