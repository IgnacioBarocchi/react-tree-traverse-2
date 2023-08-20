import { Dispatch, SetStateAction } from "react";

import { Node } from "../data/devTree";
import getLi from "./getLi";

export default function mapTree(
  treeData: Node[],
  setTree: Dispatch<SetStateAction<Node[]>>
) {
  let elements: any[] = [];

  for (const node of treeData) {
    const addToLi = getLi(node, setTree);
    if (node.children && node.children.length > 0) {
      const childElements = mapTree(node.children, setTree);
      // @ts-ignore
      const olWithLi = addToLi(["ol", {}, ...childElements]);
      elements.push(olWithLi);
    } else {
      elements.push(addToLi(null));
    }
  }

  return elements;
}
