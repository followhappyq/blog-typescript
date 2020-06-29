import { combineReducers } from "redux"

const reducers: any = []

const rootReducer = combineReducers(
  reducers.reduce((initial: any, name: any) => {
    initial[name] = require(`./${name}`).default
    return initial
  }, {})
)

export type rootReducer = ReturnType<typeof rootReducer>

export default rootReducer
