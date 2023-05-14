import {combineReducers, createStore} from "redux";
import {cashReducer} from "./Add__Reducer";
import {customerReducer} from "./Add_Customer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer)
