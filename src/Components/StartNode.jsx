import { Handle, Position } from "reactflow";

export default function StartNode({ data }) {
  return (
    <div className="startNode">
      <div>
        <label htmlFor="text"></label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "transparent", border: "none" }}
      />
    </div>
  );
}
