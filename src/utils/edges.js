import { MarkerType } from "reactflow";

const customNode = {
  type: "step",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#2a4494",
  },
  style: {
    stroke: "#2a4494",
  },
};

const mainEdges = [
  {
    ...customNode,
    id: "start-research",
    source: "start",
    target: "research",
  },
  {
    ...customNode,
    id: "start-planning",
    source: "start",
    target: "planning",
  },
  {
    ...customNode,
    id: "start-designing",
    source: "start",
    target: "designing",
  },
  {
    ...customNode,
    id: "start-manufacturing",
    source: "start",
    target: "manufacturing",
  },
  {
    ...customNode,
    id: "start-sales_marketing",
    source: "start",
    target: "sales_marketing",
  },
];

const researchEdges = [
  {
    id: "research-external",
    source: "research",
    target: "external",
    ...customNode,
  },
  {
    id: "research-internal",
    source: "research",
    target: "internal",
    ...customNode,
  },
];

const planningEdges = [
  {
    id: "planning-prd",
    source: "planning",
    target: "prd",
    ...customNode,
  },
  {
    id: "planning-specs",
    source: "planning",
    target: "specs",
    ...customNode,
  },
];

const designingEdges = [
  {
    id: "designing-hardware",
    source: "designing",
    target: "hardware",
    ...customNode,
  },
  {
    id: "designing-software",
    source: "designing",
    target: "software",
    ...customNode,
  },
];

const manufacturingEdges = [
  {
    id: "manufacturing-material",
    source: "manufacturing",
    target: "material",
    ...customNode,
  },
  {
    id: "manufacturing-production",
    source: "manufacturing",
    target: "production",
    ...customNode,
  },
];

const sales_marketingEdges = [
  {
    id: "sales_marketing-sales_online",
    source: "sales_marketing",
    target: "sales_online",
    ...customNode,
  },
  {
    id: "sales_marketing-software",
    source: "sales_marketing",
    target: "dealearship",
    ...customNode,
  },
];

const externalEdges = [
  {
    id: "external-b2c-1",
    source: "external",
    target: "b2c-1",
    ...customNode,
  },
  {
    id: "external-b2c-2",
    source: "external",
    target: "b2c-2",
    ...customNode,
  },
];

const b2cEdges = [
  {
    id: "b2c-1->online",
    source: "b2c-1",
    target: "b2c-online",
    ...customNode,
  },
  {
    id: "b2c-1->interview",
    source: "b2c-1",
    target: "interview",
    ...customNode,
  },
  {
    id: "b2c-1->public-data",
    source: "b2c-1",
    target: "public-data",
    ...customNode,
  },
  {
    id: "b2c-1->health",
    source: "b2c-1",
    target: "health",
    ...customNode,
  },
];

const endResearchEdges = [
  {
    id: "b2c-online->end",
    source: "b2c-online",
    target: "research-end",
    ...customNode,
  },
  {
    id: "health->end",
    source: "health",
    target: "research-end",
    ...customNode,
  },
];

export const initialEdges = [
  ...mainEdges,
  ...researchEdges,
  ...planningEdges,
  ...designingEdges,
  ...manufacturingEdges,
  ...sales_marketingEdges,
  ...externalEdges,
  ...b2cEdges,
  ...endResearchEdges,
];
