import { Target } from "@wing-playground/shared/src/compiler/compiler";

import tutorial00 from "./00-tutorial.md?raw";

import code01 from "./01-code.w?raw";
import solution01 from "./01-solution.w?raw";
import tutorial01 from "./01-tutorial.md?raw";

import code01dot5 from "./01.5-code.w?raw";
import solution01dot5 from "./01.5-solution.w?raw";
import tutorial01dot5 from "./01.5-tutorial.md?raw";

import code02 from "./02-code.w?raw";
import solution02 from "./02-solution.w?raw";
import tutorial02 from "./02-tutorial.md?raw";

import code02dot5 from "./02.5-code.w?raw";
import solution02dot5 from "./02.5-solution.w?raw";
import tutorial02dot5 from "./02.5-tutorial.md?raw";

import code02dot6 from "./02.6-code.w?raw";
import solution02dot6 from "./02.6-solution.w?raw";
import tutorial02dot6 from "./02.6-tutorial.md?raw";

import code03 from "./03-code.w?raw";
import solution03 from "./03-solution.w?raw";
import tutorial03 from "./03-tutorial.md?raw";

import code04 from "./04-code.w?raw";
import solution04 from "./04-solution.w?raw";
import tutorial04 from "./04-tutorial.md?raw";

import code04dot5 from "./04.5-code.w?raw";
import solution04dot5 from "./04.5-solution.w?raw";
import tutorial04dot5 from "./04.5-tutorial.md?raw";

import code05 from "./05-code.w?raw";
import solution05 from "./05-solution.w?raw";
import tutorial05 from "./05-tutorial.md?raw";

import code5dot1 from "./05.1-code.w?raw";
import solution5dot1 from "./05.1-solution.w?raw";
import tutorial5dot1 from "./05.1-tutorial.md?raw";

import code5dot2 from "./05.2-code.w?raw";
import solution5dot2 from "./05.2-solution.w?raw";
import tutorial5dot2 from "./05.2-tutorial.md?raw";

import code08 from "./08-code.w?raw";
//import solution08 from "./08-solution.w?raw";
import tutorial08 from "./08-tutorial.md?raw";

import code09 from "./09-code.w?raw";
//import solution09 from "./09-solution.w?raw";
import tutorial09 from "./09-tutorial.md?raw";

import code10 from "./10-code.w?raw";
import solution10 from "./10-solution.w?raw";
import tutorial10 from "./10-tutorial.md?raw";

import code11 from "./11-code.w?raw";
import solution11 from "./11-solution.w?raw";
import tutorial11 from "./11-tutorial.md?raw";

import tutorial14 from "./14-tutorial.md?raw";
import {Tutorial, TutorialPage} from "../main";

export const tutorialPages: TutorialPage[] = [
    {
        id: "0",
        name:   "Welcome",
        tutorial: tutorial00,
    },
    {
        id: "1",
        name:   "Preflight - Wing's default execution phase",
        code:   code01,
        tutorial: tutorial01,
    },
    {
        id: "1.5",
        name:   "Preflight - Compilation artifacts",
        code:   code01dot5,
        tutorial: tutorial01dot5,
        //solution: solution01dot5,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "2",
        name:   "Preflight - Changing resource configuration",
        code:   code02,
        //solution: solution02,
        tutorial: tutorial02,
        targets: [Target.TFAWS],
    },
    {
        id: "2.5",
        name:   "Preflight - Hello world",
        code:   code02dot5,
        solution: solution02dot5,
        tutorial: tutorial02dot5,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "2.6",
        name:   "Functions with specific behavior",
        code:   code02dot6,
        solution: solution02dot6,
        tutorial: tutorial02dot6,
        //targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "3",
        name:   "Inflight - Intro",
        code:   code03,
        tutorial: tutorial03,
        //targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "4",
        name:   "Inflight - Run hello world",
        code:   code04,
        solution: solution04,
        tutorial: tutorial04,
        targets: ["simulator"],
    },
    {
        id: "4.5",
        name:   "Inflight - Compilation artifacts",
        code:   code04dot5,
        //solution: solution04dot5,
        tutorial: tutorial04dot5,
        targets: [Target.TFAWS],
    },
    {
        id: "5",
        name:   "Referencing preflight data from inflight code",
        code:   code05,
        solution: solution05,
        tutorial: tutorial05,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "5.1",
        name:   "Contract per phase - explanation",
        code:   code5dot1,
        //solution: solution5dot1,
        tutorial: tutorial5dot1,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "5.2",
        name:   "Contract per phase - in practice",
        code:   code5dot2,
        solution: solution5dot2,
        tutorial: tutorial5dot2,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "8",
        name:   "Mutability - a question",
        //code:   code08,
        //solution: solution08,
        tutorial: tutorial08,
        //targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "9",
        name:   "Mutability - answer to the question",
        //code:   code09,
        //solution: solution09,
        tutorial: tutorial09,
        //targets: ["simulator", Target.TFAWS],
    },
    {
        id: "10",
        name:   "Mutability protections",
        code:   code10,
        solution: solution10,
        tutorial: tutorial10,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "11",
        name:   "Mutability - how to create a counter",
        code:   code11,
        solution: solution11,
        tutorial: tutorial11,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "14",
        name:   "Contract per phase - in practice",
        //code:   code13,
        //solution: solution13,
        tutorial: tutorial14,
        targets: ["simulator", Target.TFAWS],
    },
]

export const tutorial: Tutorial = {
    name: "Preflight-Inflight",
    pages: tutorialPages,
}
