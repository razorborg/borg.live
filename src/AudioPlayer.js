import React, { Component } from 'react';

class AudioPlayer extends Component
{
    componentWillReceiveProps(newProps)
    {
        if (newProps.store.audioStreamPlaying)
        {
            window.myAudio.play();
        }
        else
        {
            window.myAudio.pause();
        }
    }
    render()
    {
        return (
            <audio style={{visibility:'hidden',position:'absolute',top:0,left:0}} crossOrigin="anonymous" id="myAudio" src={ this.props.store.audioStream.url } controls></audio>
        );
    }
}

export default AudioPlayer;
