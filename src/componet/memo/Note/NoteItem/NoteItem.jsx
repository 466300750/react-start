import React, {Component} from 'react'
import styles from './NoteItem.less'
import Check from '../../../../asset/icons/check.svg'

class NoteItem extends Component {
    render() {
        const title = this.props.title;
        const text = this.props.text;
        return <article className={styles.article}>
            <label className={styles.title}>{title}</label>
            <label className={styles.note}>{text}</label>
            <img src={Check} className={styles.done} onClick={this.props.noteCompleted}/>
        </article>
    }
}

export default NoteItem;