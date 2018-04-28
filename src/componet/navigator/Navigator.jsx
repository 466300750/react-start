import React, { Component } from 'react'
import styles from './Navigator.less'

class Navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <nav className={styles.navigator}>
            <a className={styles.retain}>Retain</a>
            <a className={styles.about}>About</a>
            <a className={styles.signout}>SignOut</a>
        </nav>
    }
}

export default Navigator;