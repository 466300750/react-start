import { addNote, deleteNote } from "./actionTypes";

const initialState = { notes: [{ title: '今天吃什么', text: '宫保鸡丁' }] }

export default (state = initialState, action) => {
    switch(action.type) {
        case addNote:
            return {notes: state.notes.concat([action.payload])}
        case deleteNote:
            const index = action.payload.index
            return {notes: state.notes.slice(0, index)
                .concat(state.notes.slice(index + 1))}
        default:
            return state
    }
}