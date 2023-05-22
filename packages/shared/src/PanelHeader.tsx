import {FC, PropsWithChildren} from "react";

export const PanelHeader: FC<PropsWithChildren> = ({children}) => {
    return <h3 className='text-white px-4 py-1 bg-gray-800 border-b border-black uppercase text-xs font-semibold leading-7 tracking-widest'>{children}</h3>;
};