import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./GameArea.module.css"
import Cell from './Cell/Cell';
import OptionsInput from './OptionsInput/OptionsInput';

const GameArea = (props) => {
   let cells = props.cells.map((cell, index) => <Cell key={index} index={index}
      activeCathegory={cell.cathegories.includes(props.activeCathegory) ? true : false}
      showingTargetCell={props.showingTargetCell && props.allowToShowTargetCell}
      number={cell.number}
      itIsTargetCell={cell.targetCell}
      selected={cell.selected}
      role={cell.role}
      showingCheckers={props.showingCheckers}
      selectCell={props.selectCell}></Cell>)

   return (
      <div className={styles.gameArea}>
         <div className={styles.boardContainer} >{cells}</div>
         <OptionsInput optionsOnChange={props.optionsOnChange}></OptionsInput>
         <NavLink to="/"><div>Menu</div></NavLink>
         <div>
            {props.showingCheckers
               ? <button onClick={(e) => props.showCodes(e)}>Show codes</button>
               : <button onClick={(e) => props.showCheckers(e)}>Show checkers</button>
            }
         </div>
         <div>
            <label htmlFor="showTarget">Show target</label>
            <input onChange={(e) => props.showTargetCell(e.target.checked)} checked={props.showingTargetCell} type="checkbox" id="showTarget"></input>
         </div>
         <div>
            <label htmlFor="targetCell" >Target cell: </label>
            <input onChange={(e) => props.writeTargetCellNumber(e.target.value)} value={props.targetCellNumberNote} type="number" id="targetCell"></input>

            <label htmlFor="boardNumber" >Board number: </label>
            <input onChange={(e) => props.writeBoardNumber(e.target.value)} value={props.boardNumber} type="number" id="boardNumber"></input>

            <label htmlFor="cellToFlip">Flip the cell: </label>
            <input onChange={(e) => props.writeCellToFlipNumber(e.target.value)} value={props.cellToFlipNumber} type="number" id="cellToFlip" />
            <button onClick={() => props.flipCell()}>Flip</button>
         </div>
      </div>
   )
}
export default GameArea
