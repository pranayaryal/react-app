import React, {Component} from 'react';
import './App.css';
import ContainerComponent from './Container';

const axios = require('axios');

class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            collection: []
        };

        this.modifyCollection = this.modifyCollection.bind(this);
    }

    render() {
        const giphys = this.state.collection;
        const listItems = giphys.map((giphy) =>
            <li key={ giphy.id }>
                <img src={ giphy.images.fixed_height.url } alt=""/>
            </li>
        );

        return (
            <div className="App">
                <h1 className="App">NEWS</h1>
                <ContainerComponent
                    heading="This is the first heading"
                    content="This is the first content"
                />
                <ContainerComponent
                    heading="This is the second Heading"
                    content="This is the second content"
                />
                <p>Let me show you some giphys</p>
                <ul>{ listItems }</ul>
            </div>

        );
    }

    componentDidMount(){
        console.log('The app component has mounted');
        this.getGifys();
    }

    getGifys(){
        var self = this;
        axios.get('http://api.giphy.com/v1/gifs/search?q=obama&api_key=By5LWSTeaBint4rqXOUiztiO9vIiFx5t&limit=5')
            .then(function (response) {
                self.modifyCollection(response);
            })
    }

    modifyCollection(response){
        this.setState({
            'collection' : response.data.data
        });
        console.log(this.state.collection);
    }


}

export default App;
