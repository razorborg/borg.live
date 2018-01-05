import React, { Component } from 'react';

class AboutJan extends Component
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
                <b>About Jan</b>
                <p>Jan is an engineer at <a href="https://www.wowza.com" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.wowza.com')}>Wowza</a> working on <a href="https://www.wowza.com/products/clearcaster" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.wowza.com/products/clearcaster')}>ClearCaster</a> and <a href="https://www.wowza.com/products/player" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.wowza.com/products/player')}>Player</a>.</p>
                <p>Previously, he led the UI Engineering team at <a href="https://www.zazzle.com" rel="noopener noreferrer" target="_blank" onClick={ this.openPage('https://www.zazzle.com')}>Zazzle</a>.</p>
                <p>A long time ago, during the height of dot-com, he was a consultant with <b>Razorfish</b>.</p>
                <p>Jan likes to live in that little intersection of technology and art.</p>
                <p>His favorite color is Orange.</p>
                <p>He also likes to unplug in a tent in the woods with his wife, kids, and dogs.</p>
                <p>Jan tends to be shy online, but you might be able to find him here:</p>
                <p><a href="https://www.linkedin.com/in/jborgersen/" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.linkedin.com/in/jborgersen/')}>LinkedIN</a><br />
                <a href="https://www.facebook.com/hikingviking" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.facebook.com/hikingviking')}>Facebook</a><br />
                <a href="https://www.instagram.com/hikingviking/" target="_blank" rel="noopener noreferrer" onClick={ this.openPage('https://www.instagram.com/hikingviking/')}>Instagram</a><br />
                </p>
            </div>
        );
    }

}
export default AboutJan;
