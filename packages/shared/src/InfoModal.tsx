import React, {FC, PropsWithChildren} from "react";
import classNames from "classnames";

export const InfoModal: FC<PropsWithChildren<{visible: boolean, onClose: () => void}>> = ({visible,onClose, children}) => {
    return <div className={classNames('fixed inset-0 z-50 overflow-y-auto', {'hidden': !visible})}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity'>
                <div className='absolute inset-0 bg-gray-500 opacity-75' onClick={onClose}/>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'/>
            <div className={classNames(
                'text-center text-slate-300',
                'px-6 pt-4 pb-6 bg-gray-900 rounded-3xl shadow-xl transform transition-all',
                'inline-block sm:my-8 sm:align-middle sm:max-w-lg sm:w-full',
            )}>
                <div className='flex justify-end'>
                    <button className='text-slate-500 hover:text-slate-300 text-3xl' onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className='p-6'>
                    {children}
                </div>
            </div>
        </div>
    </div>;
};