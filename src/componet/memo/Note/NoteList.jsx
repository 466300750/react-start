import React, {Component} from 'react'
import styles from './NoteList.less'
import NoteItem from "./NoteItem/NoteItem";

class NoteList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.noteItems.length === 0) {
            return null;
        }
        const noteItems = this.props.noteItems;
        return <ul>
            {noteItems.map((note) =>
                <NoteItem key={note.toString()} title={note.title} text={note.text}/>
            )}
        </ul>
    }
}

export default NoteList;