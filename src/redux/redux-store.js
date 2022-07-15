import { legacy_createStore as createStore, combineReducers } from "redux"
import gameAreaReducer from "./gameArea-reducer"

let reducers = combineReducers({
  gameAreaPage: gameAreaReducer,
})

let store = createStore(reducers)

export default store
