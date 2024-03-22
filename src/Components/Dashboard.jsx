import { useEffect, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { initialNodes } from "../utils/nodes";
import { initialEdges } from "../utils/edges";
import CustomNode from "./CustomNode";
import CardNode from "./CardNodes";
import StartNode from "./StartNode";

const nodeType = {
  customNode: CustomNode,
  cardNode: CardNode,
  startNode: StartNode,
};

export default function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
  const [, setHoveredNode] = useState(null);

  useEffect(() => {
    const cardNode = nodes.find((node) => node.id === "card");
    cardNode.zIndex = 1000;
    cardNode.hidden = true;
  }, []);

  const onNodeMouseEnter = (event, node) => {
    if (node.id === "card" || node.id === "start") return;
    console.log("mouse enter: " + node.id);
    setHoveredNode(node.id);
    setNodes((nds) =>
      nds.map((nd) => {
        if (nd.id === "card") {
          nd.data.detail = node.id;
          nd.position.x = node.position.x + 160;
          nd.position.y = node.position.y;
          nd.hidden = false;
        }
        return nd;
      })
    );
  };

  const onNodeMouseLeave = (event, node) => {
    if (node.id === "card" || node.id === "start") return;
    console.log("mouse leave: " + node.id);
    setHoveredNode(null);
    setNodes((nds) =>
      nds.map((nd) => {
        if (nd.id === "card") {
          nd.hidden = true;
        }
        return nd;
      })
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeType}
        onNodesChange={onNodesChange}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
