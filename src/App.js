import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import MenuPageContainer from "./components/MenuPage/MenuPageContainer"
import GameAreaContainer from "./components/GameArea/GameAreaContainer"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MenuPageContainer />}></Route>
        <Route path="/game" element={<GameAreaContainer />}></Route>
      </Routes>
    </div>
  )
}

export default App
