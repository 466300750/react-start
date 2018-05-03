import React, {Component} from 'react';
import Pad from "./Pad/Pad";
import NoteList from "./Note/NoteList";

class Memo extends Component {

    state = {noteItems: []};

    handleNoteCreated = (title, text) => {
        const noteItem = {title, text};
        this.state.noteItems.push(noteItem);
        this.setState({noteItems: this.state.noteItems});
    };

    handleNoteCompleted = (index) => {
        this.state.noteItems.splice(index, 1);
        this.setState({noteItems: this.state.noteItems});
    };

    render() {
        const noteItems = this.state.noteItems;
        return <div>
            <Pad onNoteCreated={this.handleNoteCreated}/>
            <NoteList noteItems={noteItems} noteCompleted={this.handleNoteCompleted}/>
        </div>
    }
}

export default Memo;