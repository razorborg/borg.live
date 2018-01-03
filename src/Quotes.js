import React, { Component } from 'react';
import './Quotes.css';

class Quotes extends Component
{
    constructor(props)
    {
        super(props);
        this.quotes = [
            "Everything<br />that can be digital<br />will be digital<br /><br /><i>Jeff Dachis</i>",
            "You can't be a real country<br />unless you have a beer<br />and an airline.<br />It helps if you have<br />some kind of a football team,<br />or some nuclear weapons,<br />but at the very least you need a beer<br /><br /><i>Frank Zappa</i>",
            "Imagination<br />is more important<br />than knowledge<br /><br /><i>Albert Einstein</i>",
            "Any sufficiently advanced technology<br />is indistinguishable<br />from magic<br /><br /><i>Arthur C. Clarke</i>",
            "Scientists<br />are in some respect<br />like artists<br /><br /><i>Dr. Ernest Boyer</i>"
        ];
        this.state = {
            quoteIndex:0
        }
    }
    componentDidMount()
    {
        let _this = this;
        function fadeOut()
        {
            _this.quoteSpan.className = 'quote out';
        }
        function fadeIn()
        {
            _this.quoteSpan.className = 'quote in';
        }
        function changeQuote()
        {
            fadeOut();
            setTimeout( function () {
                _this.setState({
                    quoteIndex:Math.floor(Math.random()*(_this.quotes.length))
                });
                fadeIn();
            },1500);
        }
        setInterval( changeQuote, 10000);
    }
    render()
    {
        return(
            <div className="centered normal-light-mono-text">
                <span ref={(span) => { this.quoteSpan = span; }} dangerouslySetInnerHTML={{ __html:this.quotes[this.state.quoteIndex] }}></span>
            </div>
        );
    }
}
export default Quotes;
