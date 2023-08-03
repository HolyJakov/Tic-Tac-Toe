import React,{useState,useEffect} from 'react'
import './Cells.css'


const Cells = ({cell, setCell}) => {
  
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);
    const newCell = ["","","","","","","","",""];

    useEffect(() => {
      const winner = checkWinner();
      setWinner(winner);
      
    }, [cell]);
  
    const handleReset=()=>{
      setCell(newCell)
      setIsX(true)
      setWinner(null)
    }
    
    const handleClick = (i)=>{
      if (cell[i] !== "" || winner){
        return;
      }
      const updatedCell = [...cell]
      updatedCell[i] = isX ? "X": "O"
      setCell(updatedCell)
      
      setIsX(!isX)   
    }
    const checkWinner = () => {
      const winningCombinations = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
          return cell[a]; // Return 'x' or 'o', the winner
        }
      }
      if (cell.every((cellValue) => cellValue)) {
        return 'Tie'; // Return 'Tie' if all cells are filled and there's no winner
      }
  
      return null; // No winner found
    };

  return (
    <>
    <div className='winner'>
      {winner &&winner !== 'Tie' && <div>Player {winner} Wins</div>}
      {winner === 'Tie' && <div>It's a Tie!</div>}
      {!winner && <div>Current Player: {isX ? "X": "O"}</div>}
    </div>
    <div className='Cells'>
      
        {cell.map((currCell, index)=>(
        <div className={`mycell ${currCell === 'X' ? 'red' : 'blue'}`} key={index} id={index} onClick ={()=>handleClick(index)}>
          {currCell}
        </div>
      ))}
    </div>
    <button onClick={handleReset}>Reset Game</button>
    </>
  )
  
}

export default Cells