import './styles.css'
import {store} from "./redux/rootReducer";
import {asyncCounterIncrement, changeTheme, counterDecrement, counterIncrement} from "./redux/actions";

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const counter = document.querySelector('#counter');
const themeBtn = document.querySelector('#theme');

addBtn.addEventListener('click', () => {
    store.dispatch(counterIncrement());
})

subBtn.addEventListener('click', () => {
    store.dispatch(counterDecrement());
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncCounterIncrement());
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter.counter;
    document.body.className = state.theme.theme;

    [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => btn.disabled = state.theme.disabled);
})

store.dispatch({type: 'INIT_APP'})