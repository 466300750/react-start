import React, {Component} from 'react'
import styles from './NoteList.less'
import NoteItem from "./NoteItem/NoteItem";

class NoteList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const noteItems = this.props.noteItems;
        if (noteItems.length === 0) {
            return null;
        }
        return <ul>
            {noteItems.map((note) =>
                <NoteItem key={note.index} title={note.title} text={note.text} noteCompleted={this.props.noteCompleted}/>
            )}
        </ul>
    }
}

export default NoteList;