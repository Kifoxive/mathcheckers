import React from "react"
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
         <div className={styles.controlContainer}>
            <div className={styles.btnWrapper}>
               {props.showingCheckers
                  ? <button onClick={(e) => props.showCodes(e)}>show codes</button>
                  : <button onClick={(e) => props.showCheckers(e)}>show checkers</button>
               }
            </div>
            <div className={styles.checkboxWrapper} >
               <label htmlFor="showTarget">show target</label>
               <input onChange={(e) => props.showTargetCell(e.target.checked)} checked={props.showingTargetCell} type="checkbox" id="showTarget"></input>
            </div>
            <div className={styles.inputsWrapper}>
               <label htmlFor="targetCell" >target cell: </label>
               <input onChange={(e) => props.writeTargetCellNumber(e.target.value)} value={props.targetCellNumberNote} type="number" id="targetCell" placeholder="code"></input>

               <label htmlFor="boardNumber" >board number: </label>
               <input onChange={(e) => props.writeBoardNumber(e.target.value)} value={props.boardNumber} type="number" id="boardNumber" placeholder="code"></input>

               <label htmlFor="cellToFlip">flip the cell: </label>
               <input onChange={(e) => props.writeCellToFlipNumber(e.target.value)} value={props.cellToFlipNumber} type="number" id="cellToFlip" placeholder="code"></input>

               <button onClick={() => props.flipCell()}>flip</button>
            </div>
            <div className={styles.optionsContainer}>
               <OptionsInput optionsOnChange={props.optionsOnChange}></OptionsInput>
            </div>
         </div>
      </div>
   )
}
export default GameArea
