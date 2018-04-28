import React, {Component} from 'react'
import styles from './NoteItem.less'

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, index) {
        this.props.noteCompleted(e, index);
    }

    render() {
        const title = this.props.title;
        const text = this.props.text;
        const index = this.props.key;
        return <article className={styles.article}>
            <label className={styles.title}>{title}</label>
            <label className={styles.note}>{text}</label>
            <button className={styles.done} onClick={this.handleClick.bind(this, index)}>COMPLETED</button>
        </article>
    }
}

export default NoteItem;