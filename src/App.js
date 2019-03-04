import React, { Component } from 'react';
import './App.css';
import BorgLiveStore from './BorgLiveStore';
import AudioPlayer from './AudioPlayer';
import Nav from './Nav';
import Cube from './Cube';

// TODO:
// - Find visible face when cube is spinning
// - Why somafm streams still not working in chrome/mobile?

class App extends Component
{
    constructor (props)
    {
        super (props);
        this.state = {
            store: BorgLiveStore.getState()
        };
    }

    componentDidMount()
    {
        BorgLiveStore.subscribe (this.onBorgLiveStoreChanged.bind(this));
    }

    onBorgLiveStoreChanged()
    {
        this.setState({
            store: BorgLiveStore.getState()
        });
    }


    render() {
        return (
            <div className="App">
                <AudioPlayer store={ this.state.store } />
                <Cube store={ this.state.store } />
                <Nav store={ this.state.store } />
            </div>
        );
    }
}

export default App;
