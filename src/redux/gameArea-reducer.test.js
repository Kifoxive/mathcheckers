import Board from "./../Board/Board"
import gameAreaReducer, {
  optionsOnChange,
  showCheckers,
  showCodes,
  showTargetCell,
  writeBoardNumber,
  writeCellToFlipNumber,
  writeTargetCellNumber,
  selectCell,
  flipCell,
} from "./gameArea-reducer"

let board = new Board()
board.initial()

let state = {
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

it("should change cathegory", () => {
  // 1. test data
  let action = optionsOnChange(0)
  // 2. action
  let newState = gameAreaReducer(state, action)
  // 3. expectation
  expect(newState.activeCathegory).toBe(0)
})

it("should show checkers", () => {
  let action = showCheckers()
  let newState = { ...state, showingCheckers: false }
  newState = gameAreaReducer(state, action)
  expect(newState.showingCheckers).toBe(true)
})

it("should show codes", () => {
  let action = showCodes()
  let newState = gameAreaReducer(state, action)
  expect(newState.showingCheckers).toBe(false)
})

it("should show target cell", () => {
  let action = showTargetCell(true)
  let newState = gameAreaReducer(state, action)
  expect(newState.showingTargetCell).toBe(true)
})

it("should write board number", () => {
  let action = writeBoardNumber("010101 text")
  let newState = gameAreaReducer(state, action)
  expect(newState.boardNumber).toBe("010101 text")
})

it("should write target cell number", () => {
  let action = writeTargetCellNumber("010101 text")
  let newState = gameAreaReducer(state, action)
  expect(newState.targetCellNumberNote).toBe("010101 text")
})

it("should write number of cell to flip", () => {
  let action = writeCellToFlipNumber("010101 text")
  let newState = gameAreaReducer(state, action)
  expect(newState.cellToFlipNumber).toBe("010101 text")
})

it("should select cell", () => {
  let action = selectCell(63)
  let newState = gameAreaReducer(state, action)
  expect(newState.cells[63].selected).toBe(true)
})

it("should unselect cell", () => {
  let action = selectCell(63)
  state.cells[63] = { ...state.cells[63], selected: true }

  let newState = gameAreaReducer(state, action)
  expect(newState.cells[63].selected).toBe(false)
})

it("should flip cell", () => {
  state.cells[63].role = "tail"
  state.cellToFlipNumber = "111111"
  let action = flipCell()

  let newState = gameAreaReducer(state, action)
  expect(newState.cells[63].role).toBe("head")
})
