import {InfoModal} from "@wing-playground/shared/src/InfoModal";
import React from "react";

export const WelcomeModal = ({visible, onClose}: {visible: boolean, onClose: () => void}) => {
    return (
        <InfoModal visible={visible} onClose={onClose}>
            <div className='gap-y-4'>
                <h1 className='text-[1.7rem]'>Welcome to the Winglang Tutorial!</h1>
                <div className='pt-8 space-y-8'>
                    <div>
                        Let's quickly build a smart queue that prints its messages and stores the latest one in a bucket.
                    </div>
                    <div>
                        You'll interact with it in the embedded Wing Simulator, and then compile to AWS.
                    </div>
                    <div>
                        <button className='mt-2 px-4 py-4 w-full hover:bg-[#2AD5C1] hover:text-slate-800 bg-gray-600 rounded-lg' onClick={onClose}>
                            Let’s get started!
                        </button>
                    </div>
                </div>
            </div>
        </InfoModal>
    )
}