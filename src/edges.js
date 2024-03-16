import { MarkerType } from "reactflow";

const customNode = {
  type: "step",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#000",
  },
  style: {
    stroke: "#000",
  },
};

export const initialEdges = [
  {
    ...customNode,
    id: "e0-1",
    source: "0",
    target: "1",
  },
  {
    ...customNode,
    id: "e0-2",
    source: "0",
    target: "2",
  },
  {
    ...customNode,
    id: "e0-3",
    source: "0",
    target: "3",
  },
  {
    ...customNode,
    id: "e0-4",
    source: "0",
    target: "4",
  },
  {
    ...customNode,
    id: "e0-5",
    source: "0",
    target: "5",
  },
];
