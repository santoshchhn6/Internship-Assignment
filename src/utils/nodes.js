const customNodes = {
  targetPosition: "left",
  sourcePosition: "right",
  type: "customNode",
};

const colorBlue = {
  style: { backgroundColor: "#2a4494", color: "white" ,borderRadius:"5px"},
};
const colorLightBlue = {
  style: { backgroundColor: "#82b3e8" ,borderRadius:"5px"},
};
const colorOrange = {
  style: { backgroundColor: "#e96343" ,borderRadius:"5px"},
};
const colorPink = {
  style: { backgroundColor: "#e8919d" ,borderRadius:"5px"},
};
const colorViolet = {
  style: { backgroundColor: "#a684eb" ,borderRadius:"5px"},
};

const mainNodes = [
  {
    id: "research",
    position: { x: 300, y: 100 },
    data: { label: "Research" },
    ...colorBlue,
    ...customNodes,
  },
  {
    id: "planning",
    position: { x: 300, y: 200 },
    data: { label: "Planning" },
    ...colorLightBlue,
    ...customNodes,
  },
  {
    id: "designing",
    position: { x: 300, y: 300 },
    data: { label: "Designing" },
    ...colorOrange,
    ...customNodes,
  },
  {
    id: "manufacturing",
    position: { x: 300, y: 400 },
    data: { label: "Manufacturing" },
    ...colorPink,
    ...customNodes,
  },
  {
    id: "sales_marketing",
    position: { x: 300, y: 500 },
    data: { label: "Sales/Marketing" },
    ...colorViolet,
    ...customNodes,
  },
];

const researchNodes = [
  {
    id: "external",
    position: { x: 500, y: 75 },
    data: { label: "External" },
    ...colorBlue,
    ...customNodes,
  },
  {
    id: "internal",
    position: { x: 500, y: 125 },
    data: { label: "Internal" },
    ...colorBlue,
    ...customNodes,
  },
];
const planningNodes = [
  {
    id: "prd",
    position: { x: 500, y: 175 },
    data: { label: "PRD" },
    ...colorLightBlue,
    ...customNodes,
  },
  {
    id: "specs",
    position: { x: 500, y: 225 },
    data: { label: "Specs" },
    ...colorLightBlue,
    ...customNodes,
  },
];

const designingNodes = [
  {
    id: "hardware",
    position: { x: 500, y: 275 },
    data: { label: "Hardware" },
    ...colorOrange,
    ...customNodes,
  },
  {
    id: "software",
    position: { x: 500, y: 325 },
    data: { label: "Software" },
    ...colorOrange,
    ...customNodes,
  },
];

const manufacturingNodes = [
  {
    id: "material",
    position: { x: 500, y: 375 },
    data: { label: "Material" },
    ...colorPink,
    ...customNodes,
  },
  {
    id: "production",
    position: { x: 500, y: 425 },
    data: { label: "Production" },
    ...colorPink,
    ...customNodes,
  },
];

const sales_marketingNodes = [
  {
    id: "sales_online",
    position: { x: 500, y: 475 },
    data: { label: "Online" },
    ...colorViolet,
    ...customNodes,
  },
  {
    id: "dealearship",
    position: { x: 500, y: 525 },
    data: { label: "Dealearship" },
    ...colorViolet,
    ...customNodes,
  },
];

const externalNodes = [
  {
    id: "b2c-1",
    position: { x: 700, y: 50 },
    data: { label: "B2C" },
    ...colorBlue,
    ...customNodes,
  },
  {
    id: "b2c-2",
    position: { x: 700, y: 100 },
    data: { label: "B2C" },
    ...colorBlue,
    ...customNodes,
  },
];

const b2cNodes = [
  {
    id: "b2c-online",
    position: { x: 900, y: 0 },
    data: { label: "Online" },
    ...colorBlue,
    ...customNodes,
  },
  {
    id: "interview",
    position: { x: 900, y: 50 },
    data: { label: "Interview" },
    ...colorBlue,
    ...customNodes,
  },
  {
    id: "public-data",
    position: { x: 900, y: 100 },
    data: { label: "Public Data" },
    ...colorBlue,
    ...customNodes,
  },
  {
    id: "health",
    position: { x: 900, y: 150 },
    data: { label: "Health" },
    ...colorBlue,
    ...customNodes,
  },
];

const cardNode={
  id:"card",
  position: { x: 100, y: 100 },
  data: { label: "Card" },
  type: "cardNode",
}

export const initialNodes = [
  {
    id: "start",
    position: { x: 100, y: 300 },
    data: { label: "Start" },
    sourcePosition: "right",
    type: "customNode",
    ...colorBlue
  },

  ...mainNodes,
  ...researchNodes,
  ...planningNodes,
  ...designingNodes,
  ...manufacturingNodes,
  ...sales_marketingNodes,
  ...externalNodes,
  ...b2cNodes,
  {
    id: "research-end",
    position: { x: 1100, y: 75 },
    data: { label: "Stop" },
    targetPosition: "left",
    type: "output",
  },
  cardNode
];
