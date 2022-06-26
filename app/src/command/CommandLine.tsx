import React from 'react';
import './CommandLine.css'

type CommandLineProps = {
    target_ref: React.RefObject<any>;
    onKeyDown: {
        [key: string]: () => void,
    };
}
type CommandLineState = {}

class CommandLine extends React.Component<CommandLineProps, CommandLineState> {
    textareaRef: React.RefObject<any>

    constructor(props: Readonly<CommandLineProps>) {
        super(props);
        this.state = {};
        this.textareaRef = React.createRef();
    }

    resize() {
        if (this.textareaRef === null || this.textareaRef.current === null) return;

        const textarea = this.textareaRef.current;
        textarea.style.height = "0px";
        textarea.style.height = textarea.scrollHeight + "px";
    }

    handleKeyDown(e) {
        // console.log("CommandLine.handleKeyDown: e.key = "+ e.key);
        if (e.key === "Escape") this.props.onKeyDown.esc();
    }

    componentDidMount() {
        this.textareaRef.current.focus();
    }

    render() {
        return (
            <>
                <div className="command_line">
                    <textarea
                        className="command_line"
                        defaultValue={"Command"}
                        ref={this.textareaRef}
                        onChange={() => this.resize()}
                        onKeyDown={(e) => this.handleKeyDown(e)}
                    />
                </div>
            </>
        );
    }
}

export default CommandLine;