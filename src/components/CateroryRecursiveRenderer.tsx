import { devTree } from "../data/devTree";
import mapTree from "../lib/getTree";
import { useState } from "react";

const CateroryRecursiveRenderer2 = () => {
  const [tree, setTree] = useState(devTree);
  const treeElements = mapTree(tree, setTree);

  return (
    <>
      <h2>3</h2>
      <ol>{treeElements}</ol>
    </>
  );
};

export default CateroryRecursiveRenderer2;
