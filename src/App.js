import React, {Component} from 'react';
import './App.css';
import Heading from './Heading';
import Content from './Content';
import ContainerComponent from './Container';

class App extends Component {


    render() {
        return (
            <div>
                <h1 className="App">NEWS</h1>
                <ContainerComponent
                    heading="This is the first heading"
                    content="This is the first content"
                />
                <ContainerComponent
                    heading="This is the second Heading"
                    content="This is the second content"
                />
            </div>

        );
    }

}

export default App;
