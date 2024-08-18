import "./Box.css";

export default function Box({ value, index, handleToggle }) {

    return (
        <div onClick={() => { handleToggle(index) }} className={`Box ${value ? 'bg-[#D1E231]' : 'bg-[#fff]'}`} >
        </div >
    );
}
