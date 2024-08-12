import { useState } from "react";
import "./accordion.css";
import accMarker from '../../assets/acc-marker.svg'

export default function ModuleAccordion({ content }) {
  const [isAccOpen, setIsAccOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccOpen(!isAccOpen);
  };

  return (
    <div className={`accordion ${isAccOpen ? "active" : ""}`}>
      <div className="accordion-header">
        <img src={accMarker} onClick={toggleAccordion} alt="" />
        <div className="text-[18px]">
          {content.car_name ? content.car_name : content.model_name}
        </div>
      </div>
      <div className="accordion-answer">
        {content.models ? (
          content.models.map((model, modelIndex) => (
            <ModuleAccordion
              key={modelIndex}
              index={modelIndex}
              content={model}
            />
          ))
        ) : (
          <div>
            <p>Pricing: {content.details.pricing}</p>
            <p>Color: {content.details.color}</p>
            <p>Mileage: {content.details.mileage}</p>
            <p>Fuel Type: {content.details.fuel_type}</p>
          </div>
        )}
      </div>
    </div>
  );
}
