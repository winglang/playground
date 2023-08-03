import { Alert } from "../Alert";

export const TooSlowAlert = () => {
  return (
    <div className="grow h-full">
      <div className="max-w-3xl mx-auto">
        <Alert title="This is taking too long">
          <p>Something may have gone wrong while loading the app.</p>
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