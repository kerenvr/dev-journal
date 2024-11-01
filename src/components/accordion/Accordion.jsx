import "./Accordion.css"

const Accordion = ({ toggleAccordion, id, show, title, children, author }) => {
  const clickHandler = () => {
    toggleAccordion(id)
  }
  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={clickHandler}
      >
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h3 className="text-md">By {author}</h3>
        </div>
        <div
          className={`transform ${
            show ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          ▼
        </div>
      </div>
      {show && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  )
}

export default Accordion
