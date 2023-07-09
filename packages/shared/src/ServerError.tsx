import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export const ServerError = () => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0 mt-0.5">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-red-800">
            Server unavailable
          </h3>
          <div className="mt-2 text-base text-red-700">
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
          </div>
        </div>
      </div>
    </div>
  );
};
