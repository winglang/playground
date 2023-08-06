import { Alert } from "../Alert";

export const MobileAlert = () => {
  return (
    <div className="grow h-full">
      <div className="max-w-3xl mx-auto">
        <Alert title="Device Not Supported">
          <p>This app is intened to be used on desktops.</p>
          <p className="mt-2">
            Please open this app on a device with a wider screen.
          </p>
        </Alert>
      </div>
    </div>
  )
};