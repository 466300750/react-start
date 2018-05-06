import { addNote, deleteNote } from "./actionTypes";

export const addNoteAction = (title, text) => ({
    type: addNote,
    payload: {
        title,
        text,
    }
})

export const deleteNoteAction = (index) => ({
    type: deleteNote,
    payload: {
        index,
    }
})