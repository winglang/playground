import { Dispatch, SetStateAction, PropsWithChildren } from "react";

export interface ModalProps {
  title: string;
  onDownload: React.MouseEventHandler<HTMLElement>;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ onDownload, children, title, setModalVisibility }: PropsWithChildren<ModalProps>) {
  return (
    <div id="defaultModal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="flex h-full w-full max-h-full">
        <div className="flex h-full flex-col w-full bg-white rounded-lg shadow dark:bg-gray-700">  
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>

              <h4 onClick={onDownload} className="flex text-l ml-[30px] p-[3px] font-semibold dark:hover:bg-gray-600 text-gray-900 dark:text-white cursor-pointer">
                <span>Download</span>
              </h4>
            </div>
            <button onClick={() => setModalVisibility(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
          </div>
          
          <div className="flex flex-grow h-full p-6 space-y-6">
            <div className="flex flex-grow h-full text-base leading-relaxed text-gray-500 dark:text-gray-400">
              
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}