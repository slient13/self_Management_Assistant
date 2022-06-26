import React from 'react';
import Element from './Element'

type elementPageState = {
    element_list: elementAttr[];
    select: number;
}

type elementPageProps = {
    target_ref: React.RefObject<any>;
    onKeyDown: {
        [key: string]: () => void,
    };
}

interface elementAttr {
    id: string;
    title: string;
    time: {
        start: Date;
        end: Date;
    };
    contents: string;
}

class ElementPage extends React.Component<elementPageProps, elementPageState> {
    index: number;

    constructor(props: Readonly<elementPageProps>) {
        super(props);
        this.index = 0;
        this.state = {
            // element_list: [],
            //test code        
            element_list: Array<string>('1', '2', '3').map((v) => {
                return {
                    id: "id-" + v,
                    title: "title-" + v,
                    time: {
                        start: new Date(),
                        end: new Date(new Date().setDate(new Date().getDate() + 5)),
                    },
                    contents: "contents-" + v,
                }
            }),
            select: 0,
        }

    }

    

    addElement(title: string, startTime: Date, endTime: Date, contents: string) {
        this.index += 1;
        this.setState((prevState: elementPageState, props: elementPageProps) => {
            return {
                element_list: prevState.element_list.concat([{
                    id: this.index.toString() + title,
                    title: title,
                    time: {
                        start: startTime,
                        end: endTime,
                    },
                    contents: contents,
                }])
            };
        });
    }
    
    removeElement(id: string) {
        this.setState((prevState: elementPageState, props: elementPageProps) => {
            return {
                element_list: prevState.element_list.filter((e) => e.id !== id)
            };
        });
    }

    removeElementAll() {
        this.index = 0;
        this.setState({
            element_list: [],
        })
    }

    handleKeyDown(e) {
        // console.log("ElementPage.handleKeyDown: this.props" + this.props);
        if (e.key === '/') this.props.onKeyDown.slash();
    }

    render() {
        return (
            <div tabIndex={0} ref={this.props.target_ref} onKeyDown={(e) => this.handleKeyDown(e)}>
                {this.state.element_list.map((v) => (
                    <Element
                        key={v.id}
                        title={v.title}
                        className="element"
                        time={{
                            start: v.time.start,
                            end: v.time.end,
                        }}
                        contents={v.contents}
                    />
                ))}
            </div>
        );
    }
}

export default ElementPage;