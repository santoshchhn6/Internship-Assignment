import { useState } from "react";
import { Handle, Position } from "reactflow";
import ResearchOnlineDetails from "./Details/ResearchOnlineDetails";

export default function CustomNode({ data, style }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div
      className="customNode"
      style={style}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "transparent", border: "none" }}
      />
      <div>
        <label htmlFor="text">{data.label}</label>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "transparent", border: "none" }}
      />
    </div>
  );
}
