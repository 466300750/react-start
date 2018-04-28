import React, {Component} from 'react';
import Pad from "./Pad/Pad";
import NoteList from "./Note/NoteList";

class Memo extends Component {
    constructor(props) {
        super(props);
        this.handleNoteTitleChanged = this.handleNoteTitleChanged.bind(this);
        this.handleNoteTextChanged = this.handleNoteTextChanged.bind(this);
        this.handleNoteCreated = this.handleNoteCreated.bind(this);
        this.state = {title:'', text:'', noteItems: [], index:0};
    }

    handleNoteTitleChanged(tiltle) {
        this.setState({title: tiltle});
    }

    handleNoteTextChanged(text) {
        this.setState({text: text});
    }

    handleNoteCreated(e) {
        const noteItem = {title: this.state.title, text: this.state.text};
        this.state.noteItems.push(noteItem);
        this.setState({noteItems: this.state.noteItems});
    }

    handleNoteCompleted(e, index) {
        this.state.noteItems.splice(index, 1);
        this.setState({noteItems: this.state.noteItems});
    }

    render() {
        const noteItems = this.state.noteItems;
        const index = this.state.index;
        return <div>
            <Pad onTitleChanged={this.handleNoteTitleChanged}
                 onTextChanged={this.handleNoteTextChanged}
                 onNoteCreated={this.handleNoteCreated}/>
            <NoteList noteItems={noteItems} noteCompleted={this.handleNoteCompleted.bind(this, index)}/>
        </div>
    }
}

export default Memo;