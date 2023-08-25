export default function Square({value, onSquareClick}) {

    function handleClick() {
        console.log("clicked : ", value);
        onSquareClick();
    }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    )
}