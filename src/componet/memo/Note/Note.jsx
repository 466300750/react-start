import React, {Component} from 'react'
import styles from './Note.less'

class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.isSubmitted) {
            return null;
        }
        const title = this.props.title;
        const text = this.props.text;
        return <article className={styles.article}>
            <label className={styles.title}>{title}</label>
            <label className={styles.note}>{text}</label>
        </article>
    }
}

export default Note;