import React from "react";
import './App.css';
import ElementPage from "./elementPage/ElementPage.tsx"
import CommandLine from "./command/CommandLine.tsx"



class App extends React.Component {
    constructor(props) {
        super(props);
        this.focusMode = {
            ElementPage: 0x0000,
            CommandLine: 0x1000,
        };
        this.refDict = {
            ElementPage: React.createRef(),
            CommandLine: React.createRef(),
        };

        this.state = {
            focus: this.focusMode.ElementPage,
        };
    }

    openCommandLine() {
        this.setState({ focus: this.focusMode.CommandLine });
        // this.refDict.CommandLine.current.focus();
    }

    closeCommandLine() {
        this.setState({ focus: this.focusMode.ElementPage });
        this.refDict.ElementPage.current.focus();
    }

    componentDidMount() {
        this.refDict.ElementPage.current.focus();
    }

    render() {
        return (
            <>
                <h1>first header</h1>
                <ElementPage
                    target_ref={this.refDict.ElementPage}
                    onKeyDown={{
                        slash: () => this.openCommandLine(),
                    }}
                />
                {
                    this.state.focus === this.focusMode.CommandLine
                        ? (<CommandLine
                            onKeyDown={{
                                esc: () => this.closeCommandLine(),
                            }}
                        />)
                        : null
                }
            </>
        )
    }
}

export default App;