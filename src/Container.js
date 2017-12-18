
import React, { Component } from 'react';
import Heading from './Heading';
import Content from './Content';

class ContainerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {showContent: false };
        this.toggleContent = this.toggleContent.bind(this);
    }

    render() {
        return (
            <div>
                <Heading
                    heading={ this.props.heading }
                    toggleContent = { this.toggleContent }
                />
                <Content show={ this.state.showContent } content={ this.props.content}/>
            </div>

        );
    }

    toggleContent() {
        this.setState(prevState => ({
            showContent: !prevState.showContent
        }));
    }

}


export default ContainerComponent;