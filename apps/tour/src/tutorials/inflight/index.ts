import { Target } from "@wing-playground/shared/src/compiler/compiler";

import tutorial00 from "./00-tutorial.md?raw";

import code01 from "./01-code.w?raw";
import solution01 from "./01-solution.w?raw";
import tutorial01 from "./01-tutorial.md?raw";

import code02 from "./02-code.w?raw";
import solution02 from "./02-solution.w?raw";
import tutorial02 from "./02-tutorial.md?raw";

import code03 from "./03-code.w?raw";
import solution03 from "./03-solution.w?raw";
import tutorial03 from "./03-tutorial.md?raw";

import code04 from "./04-code.w?raw";
import solution04 from "./04-solution.w?raw";
import tutorial04 from "./04-tutorial.md?raw";

import code05 from "./05-code.w?raw";
import solution05 from "./05-solution.w?raw";
import tutorial05 from "./05-tutorial.md?raw";

import code06 from "./06-code.w?raw";
import solution06 from "./06-solution.w?raw";
import tutorial06 from "./06-tutorial.md?raw";

import code07 from "./07-code.w?raw";
import solution07 from "./07-solution.w?raw";
import tutorial07 from "./07-tutorial.md?raw";

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

import code12 from "./12-code.w?raw";
import solution12 from "./12-solution.w?raw";
import tutorial12 from "./12-tutorial.md?raw";

import code13 from "./13-code.w?raw";
import solution13 from "./13-solution.w?raw";
import tutorial13 from "./13-tutorial.md?raw";

import tutorial14 from "./14-tutorial.md?raw";

export interface Tutorial {
  id: string;
  name: string;
  code: string;
  solution?: string;
  tutorial?: string;
  //TODO: change when "simulator" can be a Target too
  targets: Target[] | string[];
}

export const tutorials = [
      {
        id: "0",
        name:   "Welcome",
        code: code01,
        tutorial: tutorial00,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "1",
        name:   "Preflight - Intro",
        code:   code01,
        tutorial: tutorial01,
        //solution: solution01,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "2",
        name:   "Preflight - Hello world",
        code:   code02,
        solution: solution02,
        tutorial: tutorial02,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "3",
        name:   "Inflight - Intro",
        code:   code03,
        tutorial: tutorial03,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "4",
        name:   "Inflight - Hello world",
        code:   code04,
        solution: solution04,
        tutorial: tutorial04,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "5",
        name:   "Accessing preflight data from inflight code",
        code:   code05,
        solution: solution05,
        tutorial: tutorial05,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "6",
        name:   "Compiler challenges",
        code:   code06,
        //solution: solution06,
        tutorial: tutorial06,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "7",
        name:   "Compiler inner workings",
        code:   code07,
        //solution: solution07,
        tutorial: tutorial07,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "8",
        name:   "Mutability - a question",
        code:   code08,
        //solution: solution08,
        tutorial: tutorial08,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "9",
        name:   "Mutability - answer to the question",
        code:   code09,
        //solution: solution09,
        tutorial: tutorial09,
        targets: ["simulator", Target.TFAWS],
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
        id: "12",
        name:   "Contract per phase - explanation",
        code:   code12,
        //solution: solution12,
        tutorial: tutorial12,
        targets: ["simulator", Target.TFAWS],
    },
    {
        id: "13",
        name:   "Contract per phase - in practice",
        code:   code13,
        solution: solution13,
        tutorial: tutorial13,
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
