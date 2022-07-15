import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./GameArea.module.css"
import Cell from './Cell/Cell';
import OptionsInput from './OptionsInput/OptionsInput';

const GameArea = (props) => {
   let cells = props.cells.map((cell, index) => <Cell activeCathegory={cell.cathegories.includes(props.activeCathegory) ? true : false} number={cell.number} showingCheckers={props.showingCheckers} key={index} role={cell.role} itIsTargetCell={cell.targetCell} showingTargetCell={props.showingTargetCell && props.allowToShowTargetCell}></Cell>)

   return (<div className={styles.gameArea}>
      <div className={styles.boardContainer} >{cells}</div>
      <OptionsInput optionsOnChange={props.optionsOnChange}></OptionsInput>
      <NavLink to="/"><div>Menu</div></NavLink>
      <div>
         {props.showingCheckers
            ? <button onClick={props.showCodes}>Show codes</button>
            : <button onClick={props.showCheckers}>Show checkers</button>
         }
      </div>
      <div>
         <label htmlFor="showTarget">Show target</label>
         <input onChange={props.showTargetCell} checked={props.showingTargetCell} type="checkbox" id="showTarget"></input>
      </div>
   </div>)
}
export default GameArea
