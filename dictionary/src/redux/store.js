import { combineReducers, legacy_createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { reducer as WordOfTheDay } from './WordRedux/reducer'
import {reducer as SearchReducer} from "./SearchRedux/reducer"
const Reducers = combineReducers({WordOfTheDay,SearchReducer})
export const store = legacy_createStore(Reducers,applyMiddleware(thunk))