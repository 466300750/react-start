import React, { Component } from 'react'
import Navigator from "./componet/navigator/Navigator";
import Memo from "./componet/memo/Memo";

class App extends Component {
    
    render() {
        return <div>
            <Navigator/>
            <Memo/>
        </div>
    }
}

export default App;