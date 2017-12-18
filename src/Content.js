import React, { Component } from 'react';

class Content extends Component {
    render(){
        if( ! this.props.show){
            return null;
        }

        else {
            return (
                <div className="App">
                    { this.props.content }
                </div>
            )
        }


    }
}

export default Content;
