import { FC, useState } from "react";

import { devTree } from "../data/devTree";
import { nanoid } from "nanoid";

interface Node {
  id: string;
  label: string;
  children?: Node[];
}
const CategoryFormRecursive = () => {
  const [tree, setTree] = useState(devTree);

  const TreeNode: FC<{ node: Node }> = ({ node }) => {
    const [newLabel, setNewLabel] = useState("");

    const handleAddChild = () => {
      if (newLabel.trim()) {
        const newId = nanoid();
        const newNode = {
          id: newId,
          label: newLabel,
        };

        if (!node.children) {
          node.children = [];
        }
        node.children.push(newNode);

        setNewLabel("");
        setTree([...tree]); // Trigger a re-render by updating the state with a new reference
      }
    };

    return (
      <li>
        <div>{node.label}</div>
        <button onClick={handleAddChild}>Add</button>
        <input
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        {node.children && node.children.length > 0 && (
          <ol>
            {node.children.map((child) => (
              <TreeNode key={child.id} node={child} />
            ))}
          </ol>
        )}
      </li>
    );
  };

  return (
    <>
      <h2>1</h2>
      <ol key="root-node">
        {tree.map((node) => (
          <TreeNode
            key={node.id}
            // @ts-ignore
            node={node}
          />
        ))}
      </ol>
    </>
  );
};

export default CategoryFormRecursive;
