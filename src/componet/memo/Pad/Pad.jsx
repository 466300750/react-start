import React, {Component} from 'react'
import styles from './Pad.less'

class Pad extends Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.state = {title:'', text:''};
    }

    handleDone() {
        const {title, text} = this.state
        this.props.onNoteCreated(this.inputRef.value, text);
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
            <input ref={ref => this.inputRef = ref} className={styles.title} placeholder="Title" onChange={this.handleTitleChanged} value={this.state.title}/>
            <textarea className={styles.note} placeholder="Take a Note" onChange={this.handleTextChanged} value={this.state.text}></textarea>
            <button className={styles.done} onClick={this.handleDone}>DONE</button>
        </article>
    }
}

export default Pad;
