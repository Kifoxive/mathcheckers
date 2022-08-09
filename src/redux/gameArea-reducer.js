import Board from "./../Board/Board"

const CHANGE_CATHEGORY = "CHANGE-CATHEGORY",
  SHOW_CHECKERS = "SHOW-CHECKERS",
  SHOW_CODES = "SHOW-CODES",
  SHOW_TARGET_CELL = "SHOW-TARGET-CELL",
  WRITE_BOARD_NUMBER = "WRITE-BOARD-NUMBER",
  WRITE_TARGET_CELL_NUMBER = "WRITE-TARGET-CELL-NUMBER",
  WRITE_CELL_TO_FLIP_NUMBER = "WRITE-CELL-TO-FLIP-NUMBER",
  SELECT_CELL = "SELECT-CELL",
  FLIP_CELL = "FLIP-CELL"

let board = new Board()
board.initial()

let initialState = {
  targetCell: board.targetCell,
  targetCellNumberNote: "",
  boardNumber: "",
  cellToFlipNumber: "",
  activeCathegory: "all",
  showingCheckers: true,
  allowToShowTargetCell: true,
  showingTargetCell: false,
  cells: board.cells,
}

const gameAreaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATHEGORY:
      return { ...state, activeCathegory: action.option }
    case SHOW_CHECKERS:
      return { ...state, showingCheckers: true }
    case SHOW_CODES:
      return { ...state, showingCheckers: false }
    case SHOW_TARGET_CELL:
      return {
        ...state,
        showingTargetCell: action.showingTargetCell,
      }
    case WRITE_BOARD_NUMBER:
      return {
        ...state,
        boardNumber: action.number,
      }
    case WRITE_TARGET_CELL_NUMBER:
      return {
        ...state,
        targetCellNumberNote: action.number,
      }
    case WRITE_CELL_TO_FLIP_NUMBER:
      return {
        ...state,
        cellToFlipNumber: action.number,
      }
    case SELECT_CELL:
      let newCells = [...state.cells]
      newCells[action.cellIndex] = {
        ...newCells[action.cellIndex],
        selected: !newCells[action.cellIndex].selected,
      }

      return {
        ...state,
        cells: newCells,
      }
    case FLIP_CELL: {
      let newCells = [
        ...state.cells.map((cell) => {
          if (cell.number === state.cellToFlipNumber) {
            cell.role = cell.role === "head" ? "tail" : "head"
          }
          return cell
        }),
      ]

      return {
        ...state,
        cells: newCells,
      }
    }
    default:
      return state
  }
}

export const optionsOnChange = (option) => ({
  type: CHANGE_CATHEGORY,
  option,
})
export const showCheckers = () => ({ type: SHOW_CHECKERS })
export const showCodes = () => ({ type: SHOW_CODES })
export const showTargetCell = (showingTargetCell) => ({
  type: SHOW_TARGET_CELL,
  showingTargetCell,
})
export const writeBoardNumber = (number) => ({
  type: WRITE_BOARD_NUMBER,
  number,
})
export const writeTargetCellNumber = (number) => ({
  type: WRITE_TARGET_CELL_NUMBER,
  number,
})
export const writeCellToFlipNumber = (number) => ({
  type: WRITE_CELL_TO_FLIP_NUMBER,
  number,
})
export const selectCell = (cellIndex) => ({ type: SELECT_CELL, cellIndex })
export const flipCell = () => ({ type: FLIP_CELL })

export default gameAreaReducer
