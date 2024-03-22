import { Handle, Position } from "reactflow";

export default function CustomNode({ data, style }) {
  return (
    <div className="customNode" style={style}>
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
