import Board from "./Board.js"

it("should change cathegory", () => {
  // 1. test data
  let board = new Board()
  // 2. action
  board.initial()
  // 3. expectation
  expect(board.cells.length).toBe(64)
})

it("should create generate target cell", () => {
  let board = new Board()
  board.initial()
  expect(board.targetCell.length).toBe(6)
})

it("cells should include some parameters", () => {
  let board = new Board()
  board.initial()
  expect(board.cells[63]).toEqual(
    expect.objectContaining({
      cathegories: expect.any(Array),
      number: expect.any(String),
      role: expect.any(String),
      selected: expect.any(Boolean),
      targetCell: expect.any(Boolean),
    })
  )
})
