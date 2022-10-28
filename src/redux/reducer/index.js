import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import reduceReducers from "reduce-reducers"

const combineReducer = combineReducers({
    auth: authReducer,
})

const rootReducer = reduceReducers(combineReducer)

export default rootReducer;