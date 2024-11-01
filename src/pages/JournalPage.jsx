import Accordion from "../components/accordion/Accordion"
import { useState } from "react"
import journalData from "../journal-data"

const AccordionPage = () => {
  const [items, setItems] = useState(journalData)

  const toggleAccordion = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, show: !item.show }
          : { ...item, show: false }
      )
    )
  }

  return (
    <>
      <div className="text-4xl font-bold pb-4">
        My Developer Journey — So Far
      </div>
      {items.map((item, i) => (
        <Accordion
          key={i}
          id={item.id}
          toggleAccordion={toggleAccordion}
          show={item.show}
          title={item.title}
        >
          <p>{item.content}</p>
        </Accordion>
      ))}
    </>
  )
}

export default AccordionPage
