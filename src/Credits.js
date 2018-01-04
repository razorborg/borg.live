import React, { Component } from 'react';

class Credits extends Component
{
    constructor(props)
    {
        super(props);
        this.openPage = this.openPage.bind(this);
    }
    openPage(page)
    {
        return function (event)
        {
            window.open(page,'_blank');
            if (event !== null)
            {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    render()
    {
        return (
            <div className="normal-dark-mono-text scrollable">
                <b>Credits</b><br />
                <br />
                This site was built in React<br />
                with inspiration from:<br />
                <a href="https://codepen.io/ContemporaryInsanity/" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://codepen.io/ContemporaryInsanity/')}>codepen: @ContemporaryInsanity</a><br />
                <a href="https://www.rubiks.com/" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.rubiks.com/')}>Rubik</a><br />
                <a href="https://somafm.com" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://somafm.com')}>SomaFM</a><br />
                and others.<br />
                <br />
                It is hosted on <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://cloud.google.com')}>Google Cloud</a> and maintained with <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://firebase.google.com')}>Firebase</a>.<br />
                <br />
                <a href="https://github.com/razorborg/borg.live" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://github.com/razorborg/borg.live')}>borg.live on github</a><br />
                <br />
                &copy; Copyright 2017-{ (new Date()).getFullYear() }<br />
                Jan Martin Borgersen<br />
            </div>
        );
    }
}

export default Credits;
