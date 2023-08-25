import {useState} from "react";

export default function Square({onClick}) {
    const [value, setValue] = useState(null);

    function handleClick() {
        console.log("clicked : ", value);
        setValue("X");
    }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    )
}