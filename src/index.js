import './styles.css'
import {store} from "./redux/rootReducer";
import {asyncCounterIncrement, counterDecrement, counterIncrement} from "./redux/actions";

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const counter = document.querySelector('#counter');

addBtn.addEventListener('click', () => {
    store.dispatch(counterIncrement());
})

subBtn.addEventListener('click', () => {
    store.dispatch(counterDecrement());
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncCounterIncrement());
})

store.subscribe(() => {
    const state = store.getState();
    console.log(state)
    counter.textContent = state.counter.counter;
})

store.dispatch({type: 'INIT_APP'})