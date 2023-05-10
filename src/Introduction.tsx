import { FC, useEffect, useState } from "react";
import { usePopper } from 'react-popper';

interface BackdropProps {
  target: string;
}

const Backdrop: FC<BackdropProps> = ({ target }) => {
  const element = document.querySelector(`[data-cueid="${target}"]`);
  if (!element) return null;

  const rect = element.getBoundingClientRect();

  return (
    <div>
      <div
        className="z-50 fixed bg-black opacity-50"
        style={{
          width: rect.left,
          left: 0,
          top: 0,
          bottom: 0,
        }}
      />

      <div
        className="z-50 fixed bg-black opacity-50"
        style={{
          right: 0,
          left: rect.left + rect.width,
          top: 0,
          bottom: 0,
        }}
      />

      <div
        className="z-50 fixed bg-black opacity-50"
        style={{
          width: rect.width,
          left: rect.left,
          top: 0,
          height: rect.top,
        }}
      />

      <div
        className="z-50 fixed bg-black opacity-50"
        style={{
          width: rect.width,
          left: rect.left,
          top: rect.top + rect.height,
          bottom: 0,
        }}
      />
    </div>
  );
};

const Tooltip = () => {
  return (
    <div className="">
      <div className="bg-white px-3 py-2 rounded-lg">
        <span className="text-gray-800 font-semibold">Hello there!</span>
      </div>
    </div>
  );
};

const targets = ["instructions", "code", "simulation", "progress"];

export const Introduction = () => {
  const [id, setId] = useState("instructions");

  useEffect(() => {
    const interval = setInterval(() => {
      const index = targets.indexOf(id);
      const nextIndex = (index + 1) % targets.length;
      setId(targets[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  });

//   const element = document.querySelector(`[data-cueid="${id}"]`);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement|null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement|null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <div>
      {/* <Backdrop target={id} />

       <div className="fixed z-[60]">
        <Tooltip />
      </div> */}

    {/* <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            Popper element
            <div ref={setArrowElement} style={styles.arrow} />
        </div> */}
    </div>
  );
};
