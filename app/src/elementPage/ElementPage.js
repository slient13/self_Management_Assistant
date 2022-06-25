import React from 'react';
import Element from './Element'

class ElementPage extends React.Component {
    render() {
        return (
            <>
                <Element
                    className="element"
                    title="element"
                    time={{
                        start: new Date(),
                        end: new Date(new Date().setDate(new Date().getDate() + 5)),
                    }}
                    contents="{ element }'s contents"
                />
                <Element
                    className="element cursor"
                    title="element cursor"
                    time={{
                        start: new Date(),
                        end: new Date(new Date().setDate(new Date().getDate() + 5)),
                    }}
                    contents="{ element cursor }'s contents"
                />
                <Element
                    className="element selected"
                    title="element selected"
                    time={{
                        start: new Date(),
                        end: new Date(new Date().setDate(new Date().getDate() + 5)),
                    }}
                    contents="{ element selected }'s contents"
                />
                <Element
                    className="element selected cursor"
                    title="element selected cursor"
                    time={{
                        start: new Date(),
                        end: new Date(new Date().setDate(new Date().getDate() + 5)),
                    }}
                    contents="{ element selected cursor }'s contents"
                />
            </>
        );
    }
}

export default ElementPage;