import React, {Component} from 'react'
import styles from './Pad.less'

import { connect } from 'react-redux'
import PropsType from 'prop-types'
import { addNoteAction } from '../../redux/actions';

class Pad extends Component {
    static propsType = {
        onNoteCreated : PropsType.func
    }

    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.state = {title:'', text:''};
    }

    handleDone() {
        const {title, text} = this.state
        this.props.onNoteCreated(title, text);
        this.setState({title: '', text: ''});
    }


    handleTextChanged(e) {
        this.setState({text: e.target.value});
    }

    handleTitleChanged(e) {
        this.setState({title: e.target.value});
    }

    render() {
        return <article className={styles.article}>
            <input className={styles.title} placeholder="Title" onChange={this.handleTitleChanged} value={this.state.title}/>
            <textarea className={styles.note} placeholder="Take a Note" onChange={this.handleTextChanged} value={this.state.text}></textarea>
            <button className={styles.done} onClick={this.handleDone}>DONE</button>
        </article>
    }
}

const mapDispatchToProps = {
    onNoteCreated : addNoteAction
}

export default connect(null, mapDispatchToProps)(Pad);
