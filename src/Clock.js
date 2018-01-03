import React, { Component } from 'react';
import BorgLiveStore, { ActionTypes } from './BorgLiveStore';

class Clock extends Component
{
    constructor(props)
    {
        super(props);
        this.formatTime = this.formatTime.bind(this);
    }
    componentDidMount()
    {
        function updateTime()
        {
            BorgLiveStore.dispatch({
                type:ActionTypes.SET_TIME,
                time:(new Date())
            });
        }
        setInterval( updateTime, 50 );
    }
    formatTime( timeDate )
    {
        function pad(num)
        {
        	if (num < 10)
        		return '0' + num;
        	else
        		return '' + num;
        }
        return pad(timeDate.getHours()) + ':' +
    		pad(timeDate.getMinutes()) + ':' +
    		pad(timeDate.getSeconds());

    }
    render()
    {
        return (
            <div className="centered big-dark-mono-text">
                { this.props.store.time.toLocaleDateString() }<br />
                { this.formatTime(this.props.store.time) }
            </div>
        );
    }
}

export default Clock;
