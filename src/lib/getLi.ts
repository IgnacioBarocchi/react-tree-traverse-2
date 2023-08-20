import { Node } from "../data/devTree";
import { createElement } from "react";

export default function getLi(node: Node, setTree) {
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
              console.log(
                "closureState.inputTextContent " + closureState.inputTextContent
              );
              // setTree()
              //   alert(
              //     "closureState.inputTextContent " + closureState.inputTextContent
              //   );
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
}
