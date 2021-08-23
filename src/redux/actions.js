import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";

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

export const enableBtn = () => {
    return {
        type: ENABLE_BTN
    }
}

export const disableBtn = () => {
    return {
        type: DISABLE_BTN
    }
}

export const asyncCounterIncrement = () => {
    return function(dispatch) {
        dispatch(disableBtn());
        setTimeout(() => {
            dispatch(counterIncrement())
            dispatch(enableBtn());
        }, 2000)
    }
}

export const changeTheme = (newTheme) => {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}