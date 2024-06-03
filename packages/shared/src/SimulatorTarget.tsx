import { MutableRefObject } from "react";

export interface SimulatorTargetProps {
  frameSrc: string;
  iframeRef: MutableRefObject<any>;
}

export const SimulatorTarget = (props: SimulatorTargetProps) => {
  return (
    <div className="h-full">
      <iframe
        id="console"
        className="basis-auto w-full h-full"
        src={props.frameSrc}
        allowFullScreen={true}
        allow="clipboard-read; clipboard-write"
        ref={props.iframeRef}
      ></iframe>
    </div>
  );
};
