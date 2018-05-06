import React, {Component} from 'react';
import Pad from "../../containers/Pad/Pad";
import NoteList from "../../containers/Note/NoteList";

class Memo extends Component {

    render() {
        return <div>
            <Pad />
            <NoteList />
        </div>
    }
}

export default Memo;