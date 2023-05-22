import {SimulatorTarget} from "@wing-playground/shared/src/SimulatorTarget";
import React from "react";
import {PanelHeader} from "@wing-playground/shared/src/PanelHeader";

export interface TargetView {
    title: string;
    Target: React.FC;
}
export interface TargetsViewProps {
    targets: TargetView[];
    currentTarget?: TargetView;
    setCurrentTarget?: (target: TargetView) => void;
}
export const TargetsView = ({targets, setCurrentTarget, currentTarget}: TargetsViewProps) => {
    return (
        <div className={"h-full"}>
            {targets.map((target, index) => (
                <div className={"h-full"} key={index}>
                    <PanelHeader>{target.title}</PanelHeader>
                    <target.Target/>
                </div>))}
        </div>
    );
}