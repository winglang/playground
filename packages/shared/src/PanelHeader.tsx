import {FC, PropsWithChildren} from "react";

export const PanelHeader: FC<PropsWithChildren> = ({children}) => {
    return <h3 className='text-[#BCCDD7] px-4 py-1 bg-[#334155] border border-[#1F2937] uppercase text-xs font-semibold leading-7 tracking-widest'>{children}</h3>;
};
