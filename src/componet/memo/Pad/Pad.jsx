import React, {Component} from 'react'
import styles from './Pad.less'

class Pad extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.state = {title:'', text:''};
    }

    handleClick(e) {
        this.props.onNoteCreated(e);
        this.setState({title: '', text: ''});
    }

    handleTextChanged(e) {
        this.props.onTextChanged(e.target.value);
        this.setState({text: e.target.value});
    }

    handleTitleChanged(e) {
        this.props.onTitleChanged(e.target.value);
        this.setState({title: e.target.value});
    }

    render() {
        return <article className={styles.article}>
            <input className={styles.title} placeholder="Title" onChange={this.handleTitleChanged} value={this.state.title}/>
            <textarea className={styles.note} placeholder="Take a Note" onChange={this.handleTextChanged} value={this.state.text}></textarea>
            <button className={styles.done} onClick={this.handleClick}>DONE</button>
        </article>
    }
}

export default Pad;