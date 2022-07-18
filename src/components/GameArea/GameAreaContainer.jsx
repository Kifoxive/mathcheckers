// import React from "react"
import { connect } from "react-redux"
import GameArea from './GameArea';
import { optionsOnChange, showCheckers, showCodes, showTargetCell, writeBoardNumber, writeTargetCellNumber, selectCell, } from './../../redux/gameArea-reducer';
import { } from './../../redux/gameArea-reducer';

let mapStateToProps = (state) => {
   return {
      targetCell: state.gameAreaPage.targetCell,
      // boardCode: state.gameAreaPage.boardCode,
      // flipCell: state.gameAreaPage.flipCell,
      activeCathegory: state.gameAreaPage.activeCathegory,
      showingCheckers: state.gameAreaPage.showingCheckers,
      allowToShowTargetCell: state.gameAreaPage.allowToShowTargetCell,
      showingTargetCell: state.gameAreaPage.showingTargetCell,
      cells: state.gameAreaPage.cells,
      boardNumber: state.gameAreaPage.boardNumber,
      targetCellNumberNote: state.gameAreaPage.targetCellNumberNote,
   }
}

const GameAreaContainer = connect(mapStateToProps, {
   optionsOnChange,
   showCheckers,
   showCodes,
   showTargetCell,
   writeBoardNumber,
   writeTargetCellNumber,
   selectCell,
})(GameArea)

export default GameAreaContainer
