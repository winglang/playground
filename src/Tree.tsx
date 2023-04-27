import {
  createFileTree,
  isDir,
  isFile,
  Node,
  useDnd,
  useHotkeys,
  useObserver,
  useRovingFocus,
  useSelections,
  useTraits,
  useVirtualize,
  FileTree
} from "exploration";
import { createStyles } from "@dash-ui/styles";
import { VscFolder, VscFolderOpened, VscFile } from "react-icons/vsc";
import * as colors from "@radix-ui/colors";
import React from "react";

const mockFs = {
  "/": [
    { name: "/.github", type: "dir" },
    { name: "/.husky", type: "dir" },
    { name: "/src", type: "dir" },
    { name: "/test", type: "dir" },
    { name: "/types", type: "dir" },
    { name: "/.gitignore", type: "file" },
    { name: "/babel.config.js", type: "file" },
    { name: "/CODE_OF_CONDUCT.md", type: "file" },
    { name: "/CONTRIBUTING.md", type: "file" },
    { name: "/LICENSE", type: "file" },
    { name: "/package.json", type: "file" },
    { name: "/pnpm-lock.yaml", type: "file" },
    { name: "/README.md", type: "file" },
    { name: "/tsconfig.json", type: "file" }
  ],
  "/.github": [
    { name: "/.github/ISSUE_TEMPLATE.md", type: "file" },
    { name: "/.github/PULL_REQUEST_TEMPLATE.md", type: "file" }
  ],
  "/.husky": [{ name: "/.husky/hooks", type: "dir" }],
  "/.husky/hooks": [{ name: "/.husky/hooks/pre-commit", type: "file" }],
  "/src": [
    { name: "/src/tree", type: "dir" },
    { name: "/src/index.ts", type: "file" },
    { name: "/src/file-tree.ts", type: "file" },
    { name: "/src/path-fx.ts", type: "file" }
  ],
  "/src/tree": [
    { name: "/src/tree/tree.ts", type: "file" },
    { name: "/src/tree/tree.test.ts", type: "file" }
  ],
  "/test": [
    { name: "/test/resolve-snapshot.js", type: "file" },
    { name: "/test/setup.ts", type: "file" }
  ],
  "/types": [
    { name: "/types/index.d.ts", type: "file" },
    { name: "/types/file-tree.d.ts", type: "file" },
    { name: "/types/path-fx.d.ts", type: "file" },
    { name: "/types/tree", type: "dir" }
  ],
  "/types/tree": [{ name: "/types/tree/tree.d.ts", type: "file" }]
};
// const tree = createFileTree((parent, { createFile, createDir }) =>
    
//       mockFs[parent.data.name].map(
//         (stat: { name: string; type: "file" | "dir" }) => {
//           if (stat.type === "file") {
//             return createFile({ name: stat.name });
//           }

//           return createDir({ name: stat.name });
//         }
//       )
    
//   );

export interface CreateTreeProps {
  files: TreeNode[];
}

export function createTree({ files }: CreateTreeProps): FileTree<{}> {
  const tree = createFileTree((parent, { createFile, createDir }) =>
    files.map(
      (stat) => {
        if (stat.type === "file") {
          return createFile({ name: stat.name });
        }

        return createDir({ name: stat.name });
      }
    )
  );
  return tree;
}

export interface TreeNode {
  name: string;
  type: string;
}

export interface TreeProps {
  onFileOpen: (name: string) => void;
  tree: FileTree<{}>;
}

export function Tree({ onFileOpen, tree }: TreeProps) {
  const windowRef = React.useRef<HTMLDivElement | null>(null);
  const rovingFocus = useRovingFocus(tree);
  const selections = useSelections(tree);
  const traits = useTraits(tree, ["selected", "focused", "drop-target"]);
  const dnd = useDnd(tree, { windowRef });
  const virtualize = useVirtualize(tree, { windowRef, nodeHeight: 24 });
  useHotkeys(tree, { windowRef, rovingFocus, selections });

  useObserver(selections.didChange, (value) => {
    const selected = [...value];
    traits.set("selected", selected);

    if (selected.length === 1) {
      const node = tree.getById(selected[0]);

      if (node && isFile(node)) {
        onFileOpen(node.data.name);
        console.log("Opening file:", node.data.name);
      }
    }
  });

  useObserver(rovingFocus.didChange, (value) => {
    traits.set("focused", [value]);
  });

  useObserver(dnd.didChange, (event) => {
    if (!event) return;

    if (event.type === "enter" || event.type === "expanded") {
      if (event.node.parentId === event.dir.id) {
        return traits.clear("drop-target");
      }

      const nodes = event.dir.nodes ? [...event.dir.nodes] : [];
      const nodeIds: number[] = [event.dir.id, ...nodes];
      let nodeId: number | undefined;

      while ((nodeId = nodes.pop())) {
        const node = tree.getById(nodeId);

        if (node) {
          if (isDir(node) && node.nodes) {
            nodeIds.push(...node.nodes);
            nodes.push(...node.nodes);
          }
        }
      }

      traits.set("drop-target", nodeIds);
    } else if (event.type === "drop") {
      traits.clear("drop-target");
      const selected = new Set(selections.narrow());

      if (
        event.node === event.dir ||
        (selected.has(event.node.id) && selected.has(event.dir.id))
      ) {
        return;
      }

      if (selected.has(event.node.id)) {
        const moveSelections = async () => {
          if (!tree.isVisible(event.dir)) {
            await tree.expand(event.dir);
          }

          const promises: Promise<void>[] = [];

          for (const id of selected) {
            const node = tree.getById(id);

            if (node) {
              promises.push(tree.move(node as any, event.dir));
            }
          }

          await Promise.all(promises);
        };

        moveSelections();
        selections.clear();
      } else {
        tree.move(event.node as any, event.dir);
      }
    } else if (event.type === "end") {
      traits.clear("drop-target");
    }
  });

  const plugins = [traits, rovingFocus, selections, dnd];

  return (
    <div className="flex h-full p-3 pt-0 bg-[#1E293B] text-[#f1f0f1]">
      <div ref={windowRef} className="flex h-full">
        <div className="flex flex-col h-full pt-[5px]">
          {virtualize.map((props) => {
            props.style = {};
            return (
              <div className="flex" key={props.key}>
              <Node  plugins={plugins} {...props}>
                <div className="flex flex-row h-full py-1">
                {isDir(props.node) ? (
                  props.node.expanded ? (
                    <VscFolderOpened className="flex h-full flex-row" />
                  ) : (
                    <VscFolder className="flex h-full flex-row" />
                  )
                ) : (
                  <VscFile className="flex h-full flex-row" />
                )}

                <span>{props.node.data.name}</span>

                </div>
              </Node>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// const styles = createStyles({
//   themes: {
//     light: {
//       colors: {
//         ...colors,
//         textColor: colors.slate.slate12,
//         bgColor: colors.blue.blue1,

//         selected: {
//           textColor: colors.blue.blue11
//         },

//         focused: {
//           bgColor: colors.blue.blue3,
//           borderColor: colors.blue.blue11
//         },

//         dropTarget: {
//           bgColor: colors.blue.blue4
//         }
//       }
//     },
//     dark: {
//       colors: {
//         ...colors,
//         textColor: colors.slate.slate2,
//         bgColor: colors.slate.slate12,

//         selected: {
//           textColor: colors.blue.blue9
//         },

//         focused: {
//           bgColor: colors.blackA.blackA10,
//           borderColor: colors.blue.blue9
//         },

//         dropTarget: {
//           bgColor: colors.whiteA.whiteA5
//         }
//       }
//     }
//   }
// });

// const explorerStyles = styles.one((t) => ({
  // background: t.colors.bgColor,
  // color: t.colors.textColor,
  // height: "100vh",
  // width: "100%",
  // overflow: "auto",

  // ...[...Array(20).keys()].reduce((acc, depth) => {
  //   acc[`[data-exploration-depth="${depth}"]`] = {
  //     display: "flex",
  //     gap: "0.3333em",
  //     alignItems: "center",
  //     width: "100%",
  //     paddingLeft: `${depth}rem`,
  //     borderStyle: "solid",
  //     borderWidth: 1,
  //     borderColor: "transparent",
  //     "*:last-child": {
  //       overflow: "hidden",
  //       textOverflow: "ellipsis",
  //       whiteSpace: "nowrap"
  //     }
  //   };

  //   return acc;
  // }, {} as Style),

//   svg: {
//     opacity: 0.5
//   },

//   '[data-exploration-type="dir"] svg': {
//     opacity: 1,
//     color: t.colors.amberDark.amber9
//   },

//   ".selected": {
//     color: t.colors.selected.textColor
//   },

//   ".focused": {
//     borderColor: t.colors.focused.borderColor,
//     backgroundColor: t.colors.focused.bgColor,
//     outline: "none"
//   },

//   ".drop-target": {
//     backgroundColor: t.colors.dropTarget.bgColor
//   }
// }));

// type Style = { [key: string]: React.CSSProperties | Style };
