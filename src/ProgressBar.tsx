import classnames from "classnames";
import { useMemo } from "react";

export interface ProgressBarStep {
  id: string;
  text: string;
}

export interface ProgressBarProps {
  steps: ProgressBarStep[];
  current: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const currentStepIndex = useMemo(
    () => props.steps.findIndex((step) => step.id === props.current),
    [props.steps, props.current]
  );
  const currentStep = useMemo(
    () => props.steps[currentStepIndex],
    [props.steps, currentStepIndex]
  );
  const stepsLength = useMemo(() => props.steps.length, [props.steps]);
  const percentComplete = useMemo(() => {
    let percentComplete = (currentStepIndex / stepsLength) * 100;
    if (currentStepIndex > 0 && currentStepIndex < stepsLength - 1) {
      percentComplete += 50 / stepsLength;
    } else if (currentStepIndex === stepsLength - 1) {
      percentComplete = 100;
    }
    return percentComplete;
  }, [currentStepIndex, stepsLength]);

  return (
    <div>
      {/* <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-white">{currentStep?.text}</p> */}
      <div className="mt-3" aria-hidden="true">
        <div className="relative">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-teal-500"
              style={{ width: `${percentComplete}%` }}
            />
          </div>

          <div className="absolute left-4 inset-y-0 bg-red-500 w-6" style={{left: 0}}></div>
        </div>

        <div
          className="mt-3 grid grid-cols-4 text-sm font-medium text-gray-400 relative"
          style={{
            gridTemplateColumns: `repeat(${stepsLength}, minmax(0, 1fr))`,
          }}
        >

          {props.steps.map((step, stepIndex) => (
            <div
              key={step.id}
              className={classnames({
                "text-teal-500": stepIndex <= currentStepIndex,
                "text-center": stepIndex > 0 && stepIndex < stepsLength,
                "text-right": stepIndex === stepsLength - 1,
              })}
            >
              {step.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
