import {applyMiddleware, combineReducers, createStore} from "redux";
import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const counterInitialState = {
    counter: 0
}

const themeInitialState = {
    theme: 'light',
    disabled: false
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
        default:
            return state
    }
}

const themeReducer = (state = themeInitialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
               theme: action.payload
            }
        case ENABLE_BTN:
            return {
                ...state,
                disabled: false
            }
        case DISABLE_BTN:
            return {
                ...state,
                disabled: true
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));