import { FC, useEffect, useState } from "react";

interface BackdropProps {
    target: string;
}

const Backdrop: FC<BackdropProps> = ({ target }) => {
    // const id = "instructions";
    // const id = "code";
    // const id = "simulation";
    const id = target;
    const element = document.querySelector(`[data-cueid="${id}"]`);
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    // console.log(id, element, rect)
    return <div>
        <div className="z-50 fixed bg-black opacity-50" style={{
            width: rect.left,
            left: 0,
            top: 0,
            bottom: 0,
        }} />

        <div className="z-50 fixed bg-black opacity-50" style={{
            right: 0,
            left: rect.left + rect.width,
            top: 0,
            bottom: 0,
        }} />

        <div className="z-50 fixed bg-black opacity-50" style={{
            width: rect.width,
            left: rect.left,
            top: 0,
            height: rect.top,
        }} />


        <div className="z-50 fixed bg-black opacity-50" style={{
            width: rect.width,
            left: rect.left,
            top: rect.top + rect.height,
            bottom: 0,
        }} />
    </div>
}

const targets = [
    "instructions",
    "code",
    "simulation",
    "progress",
];

export const Introduction = () => {
    const [id, setId] = useState("instructions");

    useEffect(() => {
        const interval = setInterval(() => {
            const index = targets.indexOf(id);
            const nextIndex = (index + 1) % targets.length;
            setId(targets[nextIndex]);
        }, 1000);
        return () => clearInterval(interval);
    });

    const element = document.querySelector(`[data-cueid="${id}"]`);
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    // console.log(id, element, rect)
    return <div>
        <Backdrop target={id} />
    </div>
}
