import classNames from "classnames";
import { useMemo } from "react";
import { CheckIcon } from '@heroicons/react/24/solid'

// const steps = [
//   { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
//   { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
//   { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
// ]

export interface ProgressBarStep {
  id: string;
  name: string;
  description?: string;
  tutorial: string;
  status: "complete"|"current"|"upcoming"
}

export interface ProgressBarProps {
  steps: ProgressBarStep[];
  current: string;
  onStepClick?: (step: string) => void;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { steps, current } = props;
  const currentStepIndex = useMemo(
    () => props.steps.findIndex((step) => step.id === props.current),
    [props.steps, props.current]
  );
  // const currentStep = useMemo(
  //   () => props.steps[currentStepIndex],
  //   [props.steps, currentStepIndex]
  // );
  // const stepsLength = useMemo(() => props.steps.length, [props.steps]);
  // const percentComplete = useMemo(() => {
  //   let percentComplete = (currentStepIndex / stepsLength) * 100;
  //   if (currentStepIndex > 0 && currentStepIndex < stepsLength - 1) {
  //     percentComplete += 50 / stepsLength;
  //   } else if (currentStepIndex === stepsLength - 1) {
  //     percentComplete = 100;
  //   }
  //   return percentComplete;
  // }, [currentStepIndex, stepsLength]);

  return (
    <div className="w-full text-gray-200 border-gray-600">
      <nav className="mx-auto" aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden flex rounded-none border-l border-r border-gray-600"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden flex-1">
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'overflow-hidden border-gray-600 border-0'
                )}
              >
                {stepIdx < currentStepIndex ? (
                  <button className="group hover:text-teal-500" onClick={() => props.onStepClick?.(step.id)}>
                    <span
                      className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-7' : '',
                        'flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-widest'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500">
                          <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span className="text-xs font-semibold uppercase tracking-widest">{step.name}</span>
                        {/* <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">{step.description}</span> */}
                      </span>
                    </span>
                  </button>
                ) : stepIdx === currentStepIndex ? (
                  <button aria-current="step" onClick={() => props.onStepClick?.(step.id)}>
                    <span
                      className="absolute left-0 top-0 h-full w-1 bg-teal-500 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-7' : '',
                        'flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-widest'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-500">
                          <span className="text-teal-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span className="text-xs font-semibold uppercase tracking-widest text-teal-500">{step.name}</span>
                        {/* <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">{step.description}</span> */}
                      </span>
                    </span>
                  </button>
                ) : (
                  <button className="group" onClick={() => props.onStepClick?.(step.id)}>
                    <span
                      className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-7' : '',
                        'flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-widest'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-600">
                          <span className="text-gray-300">{step.id}</span>
                        </span>
                      </span>
                      <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">{step.name}</span>
                        {/* <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">{step.description}</span> */}
                      </span>
                    </span>
                  </button>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div className="absolute inset-0 left-0 top-0 hidden w-3 lg:block" aria-hidden="true">
                      <svg
                        className="h-full w-full text-gray-600"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
