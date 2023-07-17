import { Target } from "@wing-playground/shared/src/compiler/compiler";
import code01 from "./01-code.w?raw";
import tutorial01 from "./01-tutorial.md?raw";

import code02 from "./02-code.w?raw";
import tutorial02 from "./02-tutorial.md?raw";

import code03 from "./03-code.w?raw";
import tutorial03 from "./03-tutorial.md?raw";

import tutorial04 from "../../main/07-tutorial.md?raw";

import { Tutorial, TutorialPage } from "../../main";

export const tutorialPages: TutorialPage[] = [
    {
        id: "1",
        name:   "Queue Definition",
        code:   code01,
        tutorial: tutorial01,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "2",
        name:   "Consume a message",
        code:   code02,
        // solution: solution02,
        tutorial: tutorial02,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "3",
        name:   "Push a message",
        code:   code03,
        tutorial: tutorial03,
        targets: ["simulator", Target.TFAWS],
    },
    {
      id: "4",
      name:   "Congrats",
      tutorial: tutorial04,
      targets: ["simulator", Target.TFAWS],
    },
];

export const tutorial: Tutorial = {
    name: "Queue",
    pages: tutorialPages,
}
