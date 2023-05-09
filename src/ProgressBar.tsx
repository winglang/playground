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
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-white">{currentStep?.text}</p>
      <div className="mt-6" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-teal-500"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
        <div
          className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-400 sm:grid"
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

          {/* <div className="text-teal-600">Copying files</div>
          <div className="text-center text-teal-600">Migrating database</div>
          <div className="text-center">Compiling assets</div>
          <div className="text-right">Deployed</div> */}
        </div>
      </div>
    </div>
  );
};
