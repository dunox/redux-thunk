import {applyMiddleware, combineReducers, createStore} from "redux";
import {ASYNC_INCREMENT, DECREMENT, INCREMENT} from "./types";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const counterInitialState = {
    counter: 0
}
const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ASYNC_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}

// const themeReducer = (state, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }

export const rootReducer = combineReducers({
    counter: counterReducer,
    // theme: themeReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));