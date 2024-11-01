import { v4 as uuid } from "uuid"

const journalData = [
  {
    id: uuid(),
    title: "Learning React",
    content:
      "What I learned today is that React takes a lot of time and concentration! I'm excited to keep learning.",
    show: false,
  },
  {
    id: uuid(),
    title: "Post 2",
    content: "Content for post 2 goes here.",
    show: false,
  },
  {
    id: uuid(),
    title: "Post 3",
    content: "Content for post 3 goes here.",
    show: false,
  },
]

export default journalData
