import { useEffect, useState } from 'react';
import './TabComponent.css';

export default function TabComponent() {
    const [data, setData] = useState({});

    const carData = {
        camry: {
            pricing: "$24,425",
            color: "Red",
            mileage: "30 MPG",
            fuel_type: "Gasoline",
        },
        corolla: {
            pricing: "$20,025",
            color: "Blue",
            mileage: "32 MPG",
            fuel_type: "Gasoline",
        },
        accord:{
            pricing: "$26,120",
            color: "Black",
            mileage: "33 MPG",
            fuel_type: "Gasoline",
        },
        civic:{
            pricing: "$21,250",
            color: "White",
            mileage: "36 MPG",
            fuel_type: "Gasoline",
        },
        mustang:{
            pricing: "$27,155",
            color: "Yellow",
            mileage: "24 MPG",
            fuel_type: "Gasoline",
        }
    };

    useEffect(() => {
        setData(carData.camry);

        const handleButtonClick = (e) => {
            const car = e.target.dataset.car;
            if (car && carData[car]) {
                setData(carData[car]);
            }
            
            const navTabs = document.querySelectorAll('.nav-tab');
            navTabs.forEach((tab) => {
                tab.classList.remove('active');
            });

            e.target.classList.add('active');
        };

        const container = document.querySelector('.tab-buttons-container');
        container.addEventListener('click', handleButtonClick);

        const firstTab = document.querySelector('.nav-tab');
        if (firstTab) {
            firstTab.classList.add('active');
        }

        return () => {
            container.removeEventListener('click', handleButtonClick);
        };
    }, []);

    return (
        <>
            <div className='tab-buttons-container flex items-center gap-3 p-[40px]'>
                {
                    Object.entries(carData).map(([key]) => (
                        <button id={key} className='nav-tab capitalize' data-car={key}>
                            {key}
                        </button>
                    ))
                }
            </div>
            <div className='px-[40px]'>
                {
                    Object.entries(data).map(([key, value]) => (
                        <div className='value' key={key}>
                            <span className='font-medium'>{`${key}`}</span>: {`${value}`}
                        </div>
                    ))
                }
            </div>
        </>
    );
}
