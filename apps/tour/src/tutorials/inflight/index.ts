import { Target } from "@wing-playground/shared/src/compiler/compiler";

import tutorial00 from "./00-tutorial.md?raw";

import code01 from "./01-code.w?raw";
//import solution01 from "./01-solution.w?raw";
import tutorial01 from "./01-tutorial.md?raw";

import code02 from "./02-code.w?raw";
import solution02 from "./02-solution.w?raw";
import tutorial02 from "./02-tutorial.md?raw";

import code03 from "./03-code.w?raw";
//import solution03 from "./03-solution.w?raw";
import tutorial03 from "./03-tutorial.md?raw";

import code04 from "./04-code.w?raw";
import solution04 from "./04-solution.w?raw";
import tutorial04 from "./04-tutorial.md?raw";

import code05 from "./05-code.w?raw";
//import solution05 from "./05-solution.w?raw";
import tutorial05 from "./05-tutorial.md?raw";

import code06 from "./06-code.w?raw";
import solution06 from "./06-solution.w?raw";
import tutorial06 from "./06-tutorial.md?raw";

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
        name:   "inro to preflight/inflight",
        code: code01,
        tutorial: tutorial00,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "1",
        name:   "Preflight - intro",
        code:   code01,
        tutorial: tutorial01,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "2",
        name:   "Preflight - hello world",
        code:   code02,
        solution: solution02,
        tutorial: tutorial02,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "3",
        name:   "Inflight - intro",
        code:   code03,
        tutorial: tutorial03,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "4",
        name:   "Inflight - hello world",
        code:   code04,
        solution: solution04,
        tutorial: tutorial04,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "5",
        name:   "Accessing preflight data from inflight code",
        code:   code05,
        tutorial: tutorial05,
        targets: [Target.TFAWS, "simulator"],
    },
    {
        id: "6",
        name:   "Different interfaces for the same objects in preflight and inflight",
        code:   code06,
        solution: solution06,
        tutorial: tutorial06,
        targets: [Target.TFAWS, "simulator"],
    },
]
