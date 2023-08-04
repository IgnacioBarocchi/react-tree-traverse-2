export interface Node {
  id: number;
  label: string;
  children?: Node[];
}

export const devTree: Node[] = [
  {
    id: 0,
    label: "Lorem",
    children: [
      {
        id: 1,
        label: "Dolor",
        children: [
          {
            id: 2,
            label: "Orci",
            children: [
              { id: 3, label: "Quis" },
              { id: 4, label: "Odio" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Sit",
    children: [
      { id: 6, label: "Amet" },
      { id: 7, label: "Consectetur" },
    ],
  },
  {
    id: 8,
    label: "Adipiscing",
    children: [
      {
        id: 9,
        label: "Elit",
        children: [
          { id: 10, label: "Vestibulum" },
          { id: 11, label: "Vitae" },
        ],
      },
    ],
  },
];
