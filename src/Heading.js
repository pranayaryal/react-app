import React, { Component } from 'react';

class Heading extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    render(props) {
                return (
                    <div>
                        <div>
                            <h1>
                                <a href="#" onClick={ this.handleClick }>{ this.props.heading }</a>
                            </h1>
                        </div>
                    </div>

                );

    }

    handleClick(){
        this.props.toggleContent() ;
    }


}

export default Heading;
