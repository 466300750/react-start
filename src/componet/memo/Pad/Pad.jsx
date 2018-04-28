import React, {Component} from 'react'
import styles from './Pad.less'

class Pad extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
    }

    handleClick(e) {
        this.props.onNoteCreated(e);
    }

    handleTextChanged(e) {
        this.props.onTextChanged(e.target.value);
    }

    handleTitleChanged(e) {
        this.props.onTitleChanged(e.target.value);
    }

    render() {
        return <article className={styles.article}>
            <input className={styles.title} placeholder="Title" onChange={this.handleTitleChanged}/>
            <textarea className={styles.note} placeholder="Take a Note" onChange={this.handleTextChanged}></textarea>
            <button className={styles.done} onClick={this.handleClick}>DONE</button>
        </article>
    }
}

export default Pad;