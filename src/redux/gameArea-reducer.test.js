import Board from "./../Board"
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

// it("should ", () => {
//   let action =
//   let newState = gameAreaReducer(state, action)
//   expect(newState.).toBe()
// })

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

  // the line above ^ looks confusing, the easiest way would be:
  // let newState = { ...state, cells: [...state.cells, 63 = {...state.cells[63], selected: true}] }
  // but JS spread operator doesn`t allow to get array`s element by it`s index, otherwise object can by it`s keys
  // I tried half an hour my best to find the best solution, to keep this function still pure
  // Okay, it didn`t need to copy every level till "selected", but still

  let newState = gameAreaReducer(state, action)
  expect(newState.cells[63].selected).toBe(false)
})

it("should flip cell", () => {
  let action = flipCell()

  let newState = { ...state }
  let new63Cell = { ...state.cells[63] }
  newState.cells[63] = new63Cell

  newState = { ...newState, cellToFlipNumber: "111111" }
  newState = gameAreaReducer(state, action)
  expect(newState.cells[63].role).toBe("head")
})
