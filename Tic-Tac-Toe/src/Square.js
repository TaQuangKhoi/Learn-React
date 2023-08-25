export default function Square({value, onSquareClick}) {
    function handleClick() {
        onSquareClick();
    }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    )
}