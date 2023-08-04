import "./App.css";

import { Node, devTree } from "./data/devTree";

import { createElement } from "react";

const getLi = (node: Node) => {
  const liProps = { className: "" };
  const closureState = {
    inputTextContent: "",
  };

  const getLiJSX = (parent: ["ol", {}, any] | null) =>
    createElement(
      "li",
      { ...liProps, key: node.id },
      createElement(
        "span",
        {},
        `${node.label}`,
        createElement(
          "button",
          {
            onClick: () => {
              alert(
                "closureState.inputTextContent " +
                  closureState.inputTextContenta
              );
            },
          },
          "add"
        ),
        createElement("input", {
          type: "text",
          onChange: (e) => {
            closureState.inputTextContent = e.target.value;
          },
        }),
        !parent ? null : createElement(...parent)
      )
    );

  return getLiJSX;
};

const getTree = (treeData: Node[]) => {
  let elements: any[] = [];

  for (const node of treeData) {
    const addToLi = getLi(node);
    if (node.children && node.children.length > 0) {
      const childElements = getTree(node.children);
      const olWithLi = addToLi(["ol", {}, ...childElements]);
      elements.push(olWithLi);
    } else {
      elements.push(addToLi(null));
    }
  }

  return elements;
};

function App() {
  const treeElements = getTree(devTree);

  return <ol>{treeElements}</ol>;
}

export default App;

// import "./App.css";

// import { Node, devTree } from "./data/devTree";

// import { createElement } from "react";

// const getLi = (node: Node) => {
//   const liProps = { className: "" };
//   const getLiJSX = (parent: ["ol", {}, any] | null) =>
//     createElement(
//       "li",
//       { ...liProps, key: node.id },
//       createElement(
//         "span",
//         {},
//         `${node.label}`,
//         !parent ? null : createElement(...parent)
//       )
//     );

//   return getLiJSX;
// };

// const getTree = () => {
//   let treeElements = [];

//   for (const node of devTree) {
//     const addToLi = getLi(node);
//     if (node.children) {
//       for (const child of node.children) {
//         const liWithOl = addToLi(["ol", {}, createElement(child)]);
//       }
//     } else {
//       if (treeElements.length) {
//         treeElements.push(addToLi(null));
//       } else {
//         treeElements = [addToLi(null)];
//       }
//     }
//   }
// };

// function App() {
//   return <></>;
// }

// export default App;
