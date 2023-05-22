import {InfoModal} from "@wing-playground/shared/src/InfoModal";
import React from "react";

export const CongratsModal = ({visible, onClose}: {visible: boolean, onClose: () => void}) => {
    return (
        <InfoModal visible={visible} onClose={onClose}>
            <div className='py-4'>
                <h1 className='text-2xl'>Congrats! You're one of us now.</h1>
                <div className='pt-8 flex flex-col'>
                    <div className='flex justify-around w-full'>
                        <div className='flex gap-6'>
                            <a target='_blank' href='https://docs.winglang.io/getting-started' className='hover:text-slate-900'>
                                <button className='w-[140px] h-[140px] p-2 hover:bg-[#2AD5C1] text-slate-300 hover:text-slate-800 bg-gray-600 rounded-lg space-y-4'>
                                    <div className='flex items-center h-[50px]'>
                                        <img className="h-[50px] mx-auto" src="playgroundicon.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Learn more</div>
                                </button>
                            </a>

                            <a target='_blank' href='https://play.winglang.io' className='hover:text-slate-900'>
                                <button className='w-[140px] h-[140px] p-2 hover:bg-[#2AD5C1] text-slate-300 hover:text-slate-800 bg-gray-600 rounded-lg space-y-4'>
                                    <div className='flex items-center h-[50px]'>
                                        <img className="h-[42px] mx-auto text-slate-300" src="shark.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>Try the playground</div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </InfoModal>
    )
}