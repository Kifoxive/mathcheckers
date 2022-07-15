// import React from "react"
import { connect } from "react-redux"
import GameArea from './GameArea';
import { optionsOnChangeAC, showCheckersAC, showCodesAC, showTargetCellAC } from './../../redux/gameArea-reducer';

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
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      optionsOnChange: (option) => {
         let action = optionsOnChangeAC(option)
         dispatch(action)
      },
      showCheckers: () => {
         let action = showCheckersAC()
         dispatch(action)
      },
      showCodes: () => {
         let action = showCodesAC()
         dispatch(action)
      },
      showTargetCell: (e) => {
         let action = showTargetCellAC(e.target.checked)
         dispatch(action)
      }
   }
}

const GameAreaContainer = connect(mapStateToProps, mapDispatchToProps)(GameArea)

export default GameAreaContainer
