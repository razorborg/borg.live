import React, { Component } from 'react';
import BorgLiveStore, { ActionTypes } from './BorgLiveStore';

class AudioOscope extends Component
{
    constructor(props)
    {
        super(props);
        this.toggleAudioStreamPlaying = this.toggleAudioStreamPlaying.bind(this);
    }

    componentDidMount()
    {
        var ctx = new (window.AudioContext || window.webkitAudioContext)();
        var scopeCtx = document.getElementById('scope').getContext('2d');
        var analyser = ctx.createAnalyser();
        var aud = document.getElementById('myAudio');
        aud.crossOrigin = "anonymous";
        var audioSrc = ctx.createMediaElementSource(aud);
        audioSrc.connect(analyser);
        analyser.connect(ctx.destination);

        function draw()
        {
            drawScope(analyser, scopeCtx, 'rgb(255, 255, 0)', 'rgba(0, 0, 250, 0.2)');
            requestAnimationFrame(draw);
        }
        draw();

        function drawScope(analyser, ctx, strokeColor, fillColor)
        {
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;
            var timeData = new Uint8Array(analyser.frequencyBinCount);
            var scaling = height / 256;
            var risingEdge = 0;
            var edgeThreshold = 5;

            analyser.getByteTimeDomainData(timeData);

            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 2;
            ctx.strokeStyle = strokeColor;
            ctx.beginPath();

            while (timeData[risingEdge++] - 128 > 0 && risingEdge <= width);
            if (risingEdge >= width) risingEdge = 0;

            while (timeData[risingEdge++] - 128 < edgeThreshold && risingEdge <= width);
            if (risingEdge >= width) risingEdge = 0;

            for (var x = risingEdge; x < timeData.length && x - risingEdge < width; x++)
            ctx.lineTo(x - risingEdge, height - timeData[x] * scaling);
            ctx.stroke();
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

    render()
    {
        return (
            <div style={{height:'100%',width:'100%',position:'absolute'}}>
                <canvas id="scope" width="500" height="500" style={{height:'100%',width:'100%',position:'absolute'}}></canvas>
                <div className="centered">
                    { this.props.store.audioStreamPlaying && (
                        <button className="media-button-light" onClick={ this.toggleAudioStreamPlaying }><i className="fa fa-pause"></i></button>
                    )}
                    { !this.props.store.audioStreamPlaying && (
                        <button className="media-button-light" onClick={ this.toggleAudioStreamPlaying }><i className="fa fa-play"></i></button>
                    )}
                </div>
            </div>
        );
    }

}

export default AudioOscope;
