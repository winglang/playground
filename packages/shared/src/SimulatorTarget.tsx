import React from "react";

export interface SimulatorTargetProps {
    frameSrc: string;
    iframeRef: React.MutableRefObject<any>
}

export const SimulatorTarget = (props: SimulatorTargetProps) => {
    return (
        <iframe
            id='console'
            className='w-full h-full basis-auto'
            src={props.frameSrc}
            allowFullScreen={true}
            ref={props.iframeRef}
        ></iframe>
    )
}