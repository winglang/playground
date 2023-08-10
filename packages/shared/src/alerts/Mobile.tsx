import { Alert } from "../Alert";

export const MobileAlert = () => {
  return (
    <div className="grow h-full">
      <div className="max-w-3xl mx-auto">
        <Alert title="Device Not Supported">
          <p className={"self-center"}>This app is for desktop use only.</p>
        </Alert>
      </div>
    </div>
  );
};
