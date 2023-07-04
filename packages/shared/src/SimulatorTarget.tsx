import {useEffect, MutableRefObject} from "react";

export interface SimulatorTargetProps {
  frameSrc: string;
  iframeRef: MutableRefObject<any>
}

export const SimulatorTarget = (props: SimulatorTargetProps) => {
  // use useEffect to set iframe html to no overflow

  useEffect(() => {
    console.log('SimulatorTarget useEffect');
    const iframe = props.iframeRef.current;
    if (!iframe) {
      return;
    }
    const iframeDocument = iframe.contentDocument;
    if (!iframeDocument) {
      return;
    }
    const iframeHtml = iframeDocument.documentElement;
    if (!iframeHtml) {
      return;
    }
    iframeHtml.style.overflow = 'hidden';
  }, [props.iframeRef]);


  return (
    <div className="h-full">
      <iframe
        id='console'
        className='basis-auto w-full h-full'
        src={props.frameSrc}
        allowFullScreen={true}
        ref={props.iframeRef}
        scrolling="no"
      ></iframe>
    </div>
  )
}
