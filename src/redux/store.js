import { createStore } from "redux";

const rootReducer = (state = { notes: [{ title: '今天吃什么', text: '宫保鸡丁' }] }, action) => {
  return state
}


const store = createStore(
  rootReducer
)

export default store