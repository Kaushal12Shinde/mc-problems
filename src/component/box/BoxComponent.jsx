import { useState, useEffect, useRef } from "react";
import Box from "./Box";
export default function BoxComponent() {

    let [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let [order, setOrder] = useState([]);

    const handleToggle = (index) => {
        console.log(arr.length)
        if (order.length < 9) {
            setArr(prevArr => {
                const tempArr = [...prevArr];
                tempArr[index] = 1;
                console.log(order.length);
                return tempArr;
            })
            setOrder(prevOrder => [index, ...prevOrder]);
        }
        else
            reverse();
    };

    const reverse = () => {
        document.querySelector('.logic').style.pointerEvents = 'none';
        if (order.length <= 9 && order.length >= 1) {
            let indexNum = order.shift();
            setArr(prevArr => {
                const tempArr = [...prevArr];
                tempArr[indexNum] = 0;
                return tempArr;
            })
            setTimeout(() => {
                reverse();
            }, 800)
        }
        else {
            document.querySelector('.logic').style.pointerEvents = 'auto';
            console.log('off');
        }
    }

    return (
        <>
            <div className="grid grid-cols-3 w-[500px] gap-[10px] mx-auto mt-[60px] logic">
                {arr.map((boxVal, index) =>
                    <Box key={index} index={index} handleToggle={handleToggle} value={boxVal} />
                )}
            </div>
        </>
    );
}
