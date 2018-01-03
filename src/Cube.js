import React, { Component } from 'react';
import BorgLiveStore, { ActionTypes } from './BorgLiveStore';
import AboutJan from './AboutJan';
import AudioOscope from './AudioOscope';
import Clock from './Clock';
import Credits from './Credits';
import StreamSelector from './StreamSelector';
import Quotes from './Quotes';
import './Cube.css';

class Cube extends Component
{
    constructor (props)
    {
        super (props);
        this.setCubeFace = this.setCubeFace.bind(this);
        this.setAudioStream = this.setAudioStream.bind(this);
    }

    setCubeFace (face)
    {
        return function (event)
        {
            console.log('setCubeFace:' + face);
            BorgLiveStore.dispatch({
                type: ActionTypes.SET_CUBE_FACE,
                face: face
            });
            BorgLiveStore.dispatch({
                type: ActionTypes.SET_CUBE_ANIMATE,
                animate: !BorgLiveStore.getState().cube.animate
            });
            if (event !== null)
                event.preventDefault();
        }

    }
    setAudioStream (event)
    {
        console.log('setAudioStream');
        if (event !== null)
        {
            event.preventDefault();
            event.stopPropagation();

        }
    }

    render() {

        let cubeClassName = 'cube';

        if (this.props.store.cube.animate === true)
        {
            cubeClassName = cubeClassName + ' animate face'+this.props.store.cube.face;
        }
        else
        {
            cubeClassName = cubeClassName + ' showface face'+this.props.store.cube.face;
        }

        return (
            <div className="cube-container">
                <div className={ cubeClassName }>
                    <div className="face face0" onClick={ this.setCubeFace(0) }>
                        <AudioOscope store={ this.props.store }/>
                    </div>
                    <div className="face face1" onClick={ this.setCubeFace(1) }>
                        <Quotes />
                    </div>
                    <div className="face face2" onClick={ this.setCubeFace(2) }>
                        <StreamSelector store={ this.props.store } />
                    </div>
                    <div className="face face3" onClick= { this.setCubeFace(3) }>
                        <AboutJan />
                    </div>
                    <div className="face face4" onClick= { this.setCubeFace(4) }>
                        <Credits />
                    </div>
                    <div className="face face5" onClick= { this.setCubeFace(5) }>
                        <Clock store={ this.props.store } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cube;
