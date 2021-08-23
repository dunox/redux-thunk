import {ASYNC_INCREMENT, DECREMENT, INCREMENT} from "./types";

export const counterIncrement = () => {
    return {
        type: INCREMENT
    }
}

export const counterDecrement = () => {
    return {
        type: DECREMENT
    }
}

export const asyncCounterIncrement = () => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT})
        }, 2000)
    }
}