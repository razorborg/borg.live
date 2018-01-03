import React, { Component } from 'react';
import BorgLiveStore, { ActionTypes } from './BorgLiveStore';

class StreamSelector extends Component
{
    constructor (props)
    {
        super (props);
        this.setAudioStream = this.setAudioStream.bind(this);
        this.toggleAudioStreamPlaying = this.toggleAudioStreamPlaying.bind(this);
    }

    setAudioStream(event)
    {
        let i = this.streamSelect.selectedIndex;
        let stream = this.streamSelect[i].value;
        let streamObj = null;
        for (var j = 0; j < this.props.store.streams.length; j++)
        {
            if ( stream === this.props.store.streams[j].url )
            {
                streamObj = this.props.store.streams[j];
                break;
            }
        }
        if (streamObj && streamObj.url !== this.props.store.audioStream.url)
        {
            BorgLiveStore.dispatch({
                type:ActionTypes.SET_AUDIO_STREAM,
                audioStream:streamObj
            });
        }
        if (event !== null)
        {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    toggleAudioStreamPlaying(event)
    {
        BorgLiveStore.dispatch({
            type:ActionTypes.TOGGLE_AUDIO_STREAM_PLAYING
        });
        if (event !== null)
        {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    render() {

        return (
            <div className="centered">
                Choose your stream:<br />
                <select onClick={ this.setAudioStream } value={ this.props.store.audioStream.url } onChange={ this.setAudioStream } ref={(select) => { this.streamSelect = select; }}>
                { this.props.store.streams.map((stream,key) => (
                    <option value={ stream.url } key={ key }>{ stream.name }</option>
                ))}
                </select><br />
                { this.props.store.audioStreamPlaying && (
                    <button className="media-button-light"  onClick={ this.toggleAudioStreamPlaying }><i className="fa fa-pause"/></button>
                )}
                { !this.props.store.audioStreamPlaying && (
                    <button className="media-button-light"  onClick={ this.toggleAudioStreamPlaying }><i className="fa fa-play"/></button>
                )}
            </div>
        );
    }
}

export default StreamSelector;
