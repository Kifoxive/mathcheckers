class Board {
  constructor() {
    this.cells = []
  }

  initial() {
    for (let i = 0; i <= 63; i++) {
      // 1.   6 => 101
      // 2.   "000000" + 101 => "000000101"
      // 3.   "000|000101" => "000101"
      // 4.   "000101" => "00010|1"
      // 5.   "1" => cathegories = 0
      let binNum = ("000000" + i.toString(2)).slice(-6)
      let cathegories = []
      binNum
        .split("")
        .slice(0)
        .reverse()
        .forEach((num, index) => {
          if (num === "1") cathegories.push(index)
        })
      this.cells.push({
        cathegories: cathegories,
        number: binNum,
        selected: false,
      })
    }
    this.createTargetCell()
    this.createRandomCheckers()

    for (let i = 0; i <= 63; i++) {
      this.cells[i].role = this.checkersRoles[i]
      this.cells[i].targetCell =
        this.cells[i].number === this.targetCell ? true : false
    }
    // console.log(this.cells)
  }

  createRandomCheckers() {
    let array = []
    for (let i = 0; i <= 63; i++) {
      i < 32 ? array.push("head") : array.push("tail")
    }
    this.checkersRoles = Board.shuffleArray(array)
    this.checkersRoles = array
  }

  static shuffleArray(array) {
    let curId = array.length
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId)
      curId -= 1
      // Swap it with the current element.
      let tmp = array[curId]
      array[curId] = array[randId]
      array[randId] = tmp
    }
    return array
  }

  createTargetCell() {
    const min = 0,
      max = 63
    let cellRandomNumber = Math.floor(
      Math.random() * (max - min + 1) + min
    ).toString(2)
    this.targetCell = ("000000" + cellRandomNumber.toString(2)).slice(-6)
  }
}

export default Board
