import Board from "./../Board"

const CHANGE_CATHEGORY = "CHANGE-CATHEGORY"
const SHOW_CHECKERS = "SHOW-CHECKERS"
const SHOW_CODES = "SHOW-CODES"
const SHOW_TARGET_CELL = "SHOW-TARGET-CELL"

let board = new Board()
board.initial()

let initialState = {
  targetCell: board.targetCell,
  // boardCode: null,
  // flipCell: null,
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
    default:
      return state
  }
}

export const optionsOnChangeAC = (option) => ({
  type: CHANGE_CATHEGORY,
  option: option,
})
export const showCheckersAC = () => ({ type: SHOW_CHECKERS })
export const showCodesAC = () => ({ type: SHOW_CODES })
export const showTargetCellAC = (showingTargetCell) => ({
  type: SHOW_TARGET_CELL,
  showingTargetCell: showingTargetCell,
})

export default gameAreaReducer
