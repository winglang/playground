import { Target } from "@wing-playground/shared/src/compiler/compiler";

import tutorial00 from "./00-tutorial.md?raw";

import code01 from "./01-code.w?raw";
import solution01 from "./01-solution.w?raw";
import tutorial01 from "./01-tutorial.md?raw";

import code02 from "./02-code.w?raw";
import solution02 from "./02-solution.w?raw";
import tutorial02 from "./02-tutorial.md?raw";

import {Tutorial, TutorialPage} from "../main";

export const tutorialPages: TutorialPage[] = [
    {
        id: "0",
        name:   "Welcome",
        tutorial: tutorial00,
    },
    {
        id: "1",
        name:   "With AWS target opened",
        code:   code01,
        tutorial: tutorial01,
        solution: solution01,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "2",
        name:   "With simulator opened",
        code:   code02,
        solution: solution02,
        tutorial: tutorial02,
        targets: ["simulator", Target.TFAWS],
    },
]

export const tutorial: Tutorial = {
    name: "Markdown Playground",
    pages: tutorialPages,
}
