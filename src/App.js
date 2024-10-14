import { useState, useEffect } from "react";
import './App.css';
import Board from "./board";

export default function Square() {
const [xIsNext, setxIsNext] = useState(true);
let [boards, setboards] = useState(Array(9).fill(null));



function resetBtn(){
setboards(Array(9).fill(null));
setxIsNext(true);
}

function handleSqureBtn(i){
if (boards[i] || calCulateWinner(boards) ){
  return;
}
const nextBoard = boards.slice(); 
if (xIsNext){
  nextBoard[i] = 'x'
}else{
  nextBoard [i] = 'o'
}
setboards(nextBoard);
setxIsNext(!xIsNext);
}


const winner = calCulateWinner(boards);
let status;
if (winner){
  status = 'winner:' + winner;
}else{
  status = 'Next player:    '+ (xIsNext? 'X': 'O');
}

  return <>
    <h1>Tic-Tac-Toe</h1>
    
    <div className="status">{status}</div>
    <div className="board-row">
      <Board value={boards[0]} handleBtn={()=>handleSqureBtn(0)}/>
      <Board value={boards[1]} handleBtn={()=>handleSqureBtn(1)}/>
      <Board value={boards[2]} handleBtn={()=>handleSqureBtn(2)}/>
    </div>
    <div className="board-row">
      <Board value={boards[3]} handleBtn={()=>handleSqureBtn(3)}/>
      <Board value={boards[4]} handleBtn={()=>handleSqureBtn(4)}/>
      <Board value={boards[5]} handleBtn={()=>handleSqureBtn(5)}/>
    </div>
    <div className="board-row">
      <Board value={boards[6]} handleBtn={()=>handleSqureBtn(6)}/>
      <Board value={boards[7]} handleBtn={()=>handleSqureBtn(7)}/>
      <Board value={boards[8]} handleBtn={()=>handleSqureBtn(8)}/>
    </div>
    <button className="btn" onClick={resetBtn}>Reset</button>

  </>

}

function calCulateWinner(boards){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i]
    if (boards[a] && boards[a] ===boards[b] && boards[a] ===boards[c]){
      return boards[a];
    }
  }
  return null;
}
