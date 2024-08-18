import { useState } from 'react';
import './checkbox.css';

export default function Checkbox() {
    
    const [checkBoxes,setCheckBoxes]= useState([
        {
            "id": 1,
            "checkVal": false,
            "label": 'Apple'
        },
        {
            "id": 2,
            "checkVal": false,
            "label": 'Samsung'
        },
        {
            "id": 3,
            "checkVal": false,
            "label": 'Nokia'
        },
        {
            "id": 4,
            "checkVal": false,
            "label": 'Redmi'
        },

    ]);

    const handleCheckBox = (element)=>{
       let tempArr = checkBoxes.map((item)=>{
            if(item.id===element.id){
               return{...item , checkVal:!item.checkVal };
            }
            return item;
       })
       setCheckBoxes(tempArr);
    }

    const handleAllCheckBox = () => {
        let flagCheck = true;
        checkBoxes.forEach((item)=>{
            flagCheck = flagCheck && item.checkVal;
        });
        const tempArr = checkBoxes.map((item)=>{
            return {...item , checkVal:!flagCheck};
        })

        setCheckBoxes(tempArr);

    };

  return (
    <>
      <div className='p-[40px]'>
        {
            checkBoxes.map((element)=>(
                <div className='flex items-center gap-[12px] mb-[20px]' key={element.id}>
                    <div onClick={()=>handleCheckBox(element)} className={`check ${element.checkVal ? "bg-[#4a4a4a]" : "bg-[#fff]"}`}></div>
                    <div className='text-[#000] text-[16px]'>{element.label}</div>
                </div>
            ))
        }
        <button onClick={handleAllCheckBox} className='mt-[20px] bg-[#4a4a4a] text-[#fff] py-[12px] px-[20px] rounded-lg'>
            Select All
        </button>
      </div>
    </>
  );
}
