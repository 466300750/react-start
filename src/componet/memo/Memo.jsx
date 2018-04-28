import React, {Component} from 'react';
import Pad from "./Pad/Pad";
import Note from "./Note/Note";

class Memo extends Component {
    constructor(props) {
        super(props);
        this.handleNoteTitleChanged = this.handleNoteTitleChanged.bind(this);
        this.handleNoteTextChanged = this.handleNoteTextChanged.bind(this);
        this.handleNoteCreated = this.handleNoteCreated.bind(this);
        this.state = {title:'', text:'', isSubmitted: false};
    }

    handleNoteTitleChanged(tiltle) {
        this.setState({title: tiltle});
    }

    handleNoteTextChanged(text) {
        this.setState({text: text});
    }

    handleNoteCreated(e) {
        this.setState({isSubmitted: true});
    }

    render() {
        const title = this.state.title;
        const text = this.state.text;
        const isSubmitted = this.state.isSubmitted;
        return <div>
            <Pad onTitleChanged={this.handleNoteTitleChanged}
                 onTextChanged={this.handleNoteTextChanged}
                 onNoteCreated={this.handleNoteCreated}/>
            <Note title={title} text={text} isSubmitted={isSubmitted}/>
        </div>
    }
}

export default Memo;