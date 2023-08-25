import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {
    let winLine = [];
    let history = [];

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        if (winner === "Draw") {
            status = "Draw";
        } else {
            status = "Winner: " + winner;
        }
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const rows = [0, 1, 2].map((row) => {
        const cols = [0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return <Square key={index} value={squares[index]}
                           isWinningSquare={winLine.includes(index)}
                           onSquareClick={() => handleClick(index)}/>
        });
        return <div key={row} className="board-row">{cols}</div>
    });

    return (
        <>
            <div className="status">{status}</div>
            {rows}
        </>
    )

    function handleClick(index = 0) {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[index] = "X";
        } else {
            nextSquares[index] = "O";
        }
        onPlay(nextSquares);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                winLine = lines[i];
                return squares[a];
            }
        }

        // when no one wins, display a message about the result being a draw
        if (squares.every((square) => square !== null)) {
            return "Draw";
        }
        return null;
    }
}