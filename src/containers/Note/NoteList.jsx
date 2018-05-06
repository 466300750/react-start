import React, {Component} from 'react'
import styles from './NoteList.less'
import NoteItem from "../../componet/memo/NoteItem/NoteItem";
import { connect } from 'react-redux'
import PropsType from 'prop-types'
import { deleteNoteAction } from '../../redux/actions';



class NoteList extends Component {
    static propsType = {
        noteItems: PropsType.array,
        noteCompleted: PropsType.func,
    }

    render() {
        const noteItems = this.props.noteItems;
        if (noteItems.length === 0) {
            return null;
        }
        return <ul>
            {noteItems.map((note, index) =>
                <NoteItem key={index} title={note.title} text={note.text} noteCompleted={() => this.props.noteCompleted(index)}/>
            )}
        </ul>
    }
}

const mapStateToProps = state => {
    return {
        noteItems: state.notes,
    }
}

const mapDispatchToProps = {
    noteCompleted: deleteNoteAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);