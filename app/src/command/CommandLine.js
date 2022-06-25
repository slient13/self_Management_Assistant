import React from 'react';
import './CommandLine.css'

class CommandLine extends React.Component {
    constructor(props) {
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

    render() {
        return (
            <>
                <div className="command_line">
                    <textarea
                        className="command_line"
                        defaultValue={"Command"}
                        ref={this.textareaRef}                        
                        onChange={() => this.resize()}
                    />
                </div>
            </>
        );
    }
}

export default CommandLine;