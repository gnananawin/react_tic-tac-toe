import React, { useState, useEffect } from 'react';
import './Tictactoe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const Tictactoe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' alt='cross'/>`;
      newData[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' alt='circle'/>`;
      newData[num] = "o";
    }
    setData(newData);
    setCount(count + 1);
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of winConditions) {
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        setWinner(data[a]);
        setLock(true);
        return;
      }
    }
    if (count === 8 && !winner) {
      setWinner("draw");
      setLock(true);
    }
  };

  const reset = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    setWinner(null);
    document.querySelectorAll('.boxes').forEach((box) => (box.innerHTML = ''));
  };

  useEffect(() => {
    checkWin();
  }, [data]);

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game</h1>
      {winner && (
        <h2 className="winner">
          {winner === "draw" ? "It's a Draw!" : `Player ${winner.toUpperCase()} Wins!`}
        </h2>
      )}
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Tictactoe;