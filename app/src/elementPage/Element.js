import React from 'react';
import './Element.css';
class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const timeString = {
            start: this.props.time.start.toLocaleDateString(),
            end: this.props.time.end.toLocaleDateString(),
        };

        return (
            <>
                <div className={this.props.className}>
                    <h3> {this.props.title} </h3>
                    <p> {timeString.start} ~ {timeString.end} </p>
                    <p> {this.props.contents} </p>
                </div>
            </>
        );
    }
}

export default Element;