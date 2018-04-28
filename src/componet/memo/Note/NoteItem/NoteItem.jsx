import React, {Component} from 'react'
import styles from './NoteItem.less'

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;
        const text = this.props.text;
        return <article className={styles.article}>
            <label className={styles.title}>{title}</label>
            <label className={styles.note}>{text}</label>
        </article>
    }
}

export default NoteItem;