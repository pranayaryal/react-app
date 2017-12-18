import React, { Component } from 'react';
import Content from './Content.js';

class Heading extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    render(props) {
                return (
                    <div>
                        <div className="App">
                            <h1 onClick={ this.handleClick } >{ this.props.heading }</h1>
                        </div>
                    </div>

                );

    }

    handleClick(props){
        this.props.toggleContent() ;
    }


}

export default Heading;
