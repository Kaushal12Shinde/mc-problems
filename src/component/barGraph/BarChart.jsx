import { useEffect, useState } from "react";

export default function BarChart() {
  const CHART_DATA = [
    { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
    { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
    { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
    { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
    { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
    {
      id: "dep-6",
      name: "Human Resourcing",
      ticketCount: 35,
      colour: "#1D1E33",
    },
    { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
  ];

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Start the animation when the component mounts
    setIsLoaded(true);
  }, []);


  return(
    <>
        <div className={`max-w-[400px] mx-auto mt-[100px] border-l border-b border-l-[#474747] border-b-[#474747}`} style={{aspectRatio:1/1}}>
        <div className="flex items-end justify-around h-full">
          {CHART_DATA.map((element,index) => (
            <div
              key={element.id}
              style={{
                width: '50px',
                height: `${element.ticketCount}%`,  
                backgroundColor: element.colour,   
                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',  // Initial collapsed state
                transition: `transform 0.8s ease ${index * 0.1}s`,  // Smooth transition with slight delay per bar
              }}
              
            />
          ))}
        </div>
        </div>
    </>
  )
}
