import ModuleAccordion from "./ModuleAccordion";

export default function CarProductAcc() {
  const data = {
    cars: [
      {
        car_name: "Toyota",
        models: [
          {
            model_name: "Camry",
            details: {
              pricing: "$24,425",
              color: "Red",
              mileage: "30 MPG",
              fuel_type: "Gasoline",
            },
          },
          {
            model_name: "Corolla",
            details: {
              pricing: "$20,025",
              color: "Blue",
              mileage: "32 MPG",
              fuel_type: "Gasoline",
            },
          },
        ],
      },
      {
        car_name: "Honda",
        models: [
          {
            model_name: "Accord",
            details: {
              pricing: "$26,120",
              color: "Black",
              mileage: "33 MPG",
              fuel_type: "Gasoline",
            },
          },
          {
            model_name: "Civic",
            details: {
              pricing: "$21,250",
              color: "White",
              mileage: "36 MPG",
              fuel_type: "Gasoline",
            },
          },
        ],
      },
      {
        car_name: "Ford",
        models: [
          {
            model_name: "Mustang",
            details: {
              pricing: "$27,155",
              color: "Yellow",
              mileage: "24 MPG",
              fuel_type: "Gasoline",
            },
          },
          {
            model_name: "F-150",
            details: {
              pricing: "$28,745",
              color: "Gray",
              mileage: "20 MPG",
              fuel_type: "Gasoline",
            },
          },
        ],
      },
    ],
  };

  console.log(data);

  return (
    <>
      <div className="max-w-[786px] mx-auto mt-[70px] flex flex-col gap-[18px] px-[50px] md:px-[100px]">
        {data.cars.map((car, index) => (
          <ModuleAccordion key={index} content={car} />
        ))}
      </div>
    </>
  );
}
