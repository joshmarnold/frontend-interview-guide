import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import "./Accordion.scss";

const AccordionItem = ({ title, description, openedByDefault }) => {
  const [showDescription, setShowDescription] = useState(openedByDefault);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="accordion-item-wrapper">
      <div className="accordion-item-header" onClick={toggleDescription}>
        <h3 className="accordion-item-title">{title}</h3>
        {showDescription ? (
          <IconChevronUp size={20} />
        ) : (
          <IconChevronDown size={20} />
        )}
      </div>
      {showDescription && (
        <div className="accordion-item-description">{description}</div>
      )}
    </div>
  );
};

const Accordion = ({ items, openedByDefault }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          openedByDefault={openedByDefault === index}
        />
      ))}
    </div>
  );
};

export default Accordion;
