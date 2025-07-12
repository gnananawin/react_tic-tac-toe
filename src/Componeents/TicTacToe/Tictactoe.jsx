import React from 'react'
import './Tictactoe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const Tictactoe = () => {
  return (
    <div className='container'>
      <hi className="title">Tic Tac Toe Game</hi>
      <div className="board">

      </div>
      <button className="reset">
        Reset
      </button>
    </div>
  )
}

export default Tictactoe
 