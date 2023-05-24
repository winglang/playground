import { Target } from "@wing-playground/shared/src/compiler/compiler";
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
// import solution06 from "./06-solution.w?raw";
import tutorial06 from "./06-tutorial.md?raw";

export interface Tutorial {
    id: string;
    name: string;
    code: string;
    solution?: string;
    tutorial?: string
    targets?: Target[];
}

export const tutorials = [
    {
        id: "1",
        name:   "Create Queue",
        code:   code01,
        solution: solution01,
        tutorial: tutorial01,
        targets: ["simulator"],
    },
    {
        id: "2",
        name:   "Push Message",
        code:   code02,
        // solution: solution02,
        tutorial: tutorial02,
        targets: ["simulator"],
    },
    {
        id: "3",
        name:   "Logs",
        code:   code03,
        solution: solution03,
        tutorial: tutorial03,
        targets: ["simulator"],
    },
    {
        id: "4",
        name:   "Push Programmatically",
        code:   code04,
        solution: solution04,
        tutorial: tutorial04,
        targets: ["simulator"],
    },
    {
        id: "5",
        name:   "Use Bucket",
        code:   code05,
        solution: solution05,
        tutorial: tutorial05,
        targets: ["simulator"],
    },
    {
        id: "6",
        name:   "Compile for AWS",
        code:   code06,
        // solution: solution06,
        tutorial: tutorial06,
        targets: ["simulator", Target.TFAWS],
    },
]
