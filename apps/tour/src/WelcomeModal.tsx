import {InfoModal} from "@wing-playground/shared/src/InfoModal";
import React from "react";

export const WelcomeModal = ({visible, onClose}: {visible: boolean, onClose: () => void}) => {
    return (
        <InfoModal visible={visible} onClose={onClose}>
            <div className='gap-y-4'>
                <h1 className='text-[1.7rem]'>Welcome to the Winglang Tutorial!</h1>
                <div className='pt-8 space-y-8'>
                    <div>
                        Let's quickly learn about Winglang
                    </div>
                    <div>
                        You'll create resources, explore the terraform output, interact with the Simulator and have fune 
                    </div>
                    <div>
                        <button className='mt-2 px-4 py-4 w-full hover:bg-[#2AD5C1] hover:text-slate-800 bg-gray-600 rounded-lg' onClick={onClose}>
                            Start Learning Winglang
                        </button>
                    </div>
                </div>
            </div>
        </InfoModal>
    )
}
