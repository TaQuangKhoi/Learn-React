export default function Square({value, onSquareClick, isWinningSquare}) {
    function handleClick() {
        onSquareClick();
    }

    return (
        <button className={"square " + (isWinningSquare ? "square-highlight" : "square-normal")}
                onClick={handleClick}>
            {value}
        </button>
    )
}