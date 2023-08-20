import { Node, devTree } from "../data/devTree";

interface RenderableNode extends Node {
  childrenIds?: number[];
}

const CategoryFormIterative = () => {
  const getElementsFrom = (tree: Node[]) => {
    const nodes: RenderableNode[] = tree;

    let i = 0;

    while (i < nodes.length) {
      const children = nodes[i].children;
      nodes[i].childrenIds = children?.map((n) => n.id);
      console.log(nodes[i]);

      children?.forEach((child) => {
        nodes.push(child);
      });

      i++;
    }
    return nodes;
  };

  return (
    <>
      <h2>2</h2>
      {/* @ts-ignore */}
      <ol key="root-node">
        {getElementsFrom(devTree).map((n) => {
          return <li>{n.id}</li>;
        })}
      </ol>
    </>
  );
};

export default CategoryFormIterative;
