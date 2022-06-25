import React from "react";
import './App.css';
import ElementPage from "./elementPage/ElementPage"
import CommandLine from "./command/CommandLine"

class App extends React.Component {
    render() {
        return (
            <>
                <h1>first header</h1>
                <ElementPage />
                <CommandLine />
            </>
        )
    }
}

export default App;