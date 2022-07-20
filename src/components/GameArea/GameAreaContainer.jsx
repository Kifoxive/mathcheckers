import { connect } from "react-redux"
import GameArea from './GameArea';
import { optionsOnChange, showCheckers, showCodes, showTargetCell, writeBoardNumber, writeTargetCellNumber, selectCell, writeCellToFlipNumber, flipCell } from './../../redux/gameArea-reducer';

let mapStateToProps = (state) => {
   return {
      targetCell: state.gameAreaPage.targetCell,
      targetCellNumberNote: state.gameAreaPage.targetCellNumberNote,
      boardNumber: state.gameAreaPage.boardNumber,
      cellToFlipNumber: state.gameAreaPage.cellToFlipNumber,
      activeCathegory: state.gameAreaPage.activeCathegory,
      showingCheckers: state.gameAreaPage.showingCheckers,
      allowToShowTargetCell: state.gameAreaPage.allowToShowTargetCell,
      showingTargetCell: state.gameAreaPage.showingTargetCell,
      cells: state.gameAreaPage.cells,
   }
}

const GameAreaContainer = connect(mapStateToProps, {
   optionsOnChange,
   showCheckers,
   showCodes,
   showTargetCell,
   writeBoardNumber,
   writeTargetCellNumber,
   writeCellToFlipNumber,
   selectCell,
   flipCell,
})(GameArea)

export default GameAreaContainer
