import React, { Component } from 'react';
import BorgLiveStore, { ActionTypes } from './BorgLiveStore';
import './Nav.css';
import './FaceColors.css';
import { runInThisContext } from 'vm';

class Nav extends Component
{
    constructor (props)
    {
        super (props);
        this.state = {
            interactionHappened:false,
            collapse:true
        };
        this.setCubeFace = this.setCubeFace.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.toggleAnimate = this.toggleAnimate.bind(this);
    }

    setCubeFace (face)
    {
        return function (event)
        {
            BorgLiveStore.dispatch({
                type: ActionTypes.SET_CUBE_FACE,
                face: face
            });
            BorgLiveStore.dispatch({
                type: ActionTypes.SET_CUBE_ANIMATE,
                animate: false
            });
            if (event !== null)
                event.preventDefault();
        }
    }

    toggleCollapse ()
    {
        var _this = this;
        return function (event)
        {
            _this.setState({
                collapse:!_this.state.collapse,
                interactionHappened:true
            });
            if (event !== null)
                event.preventDefault();
        }
    }

    toggleAnimate ()
    {
        return function (event)
        {
            BorgLiveStore.dispatch({
                type: ActionTypes.SET_CUBE_ANIMATE,
                animate: !BorgLiveStore.getState().cube.animate
            });
            if (event !== null)
                event.preventDefault();
        }
    }

    render() {
        var containerClassName = 'nav-container';
        var controlClassName = 'nav-control';
        if (this.state.interactionHappened)
        {
            if (this.state.collapse)
            {
                containerClassName += ' collapse';
                controlClassName += ' collapse';
            }
            else
            {
                containerClassName += ' expand';
                controlClassName += ' expand';
            }
        }

        return (
            <div>
                <div className={containerClassName}>
                    <div className="navitem icon" onClick={ this.toggleAnimate() }>
                        { BorgLiveStore.getState().cube.animate ?
                            <i className="fa fa-stop-circle fa-lg"></i>
                        :
                            <i className="fa fa-repeat fa-lg"></i>
                        }
                    </div>
                    <div className="navitem face face4" onClick= { this.setCubeFace(4) }>
                        <i className="fa fa-code fa-lg"></i>
                    </div>
                    <div className="navitem face face3" onClick= { this.setCubeFace(3) }>
                        <i className="fa fa-user fa-lg"></i>
                    </div>
                    <div className="navitem face face1" onClick={ this.setCubeFace(1) }>
                        <i className="fa fa-quote-right fa-lg"></i>
                    </div>
                    <div className="navitem face face0" onClick={ this.setCubeFace(0) }>
                        <i className="fa fa-play fa-lg"></i>
                    </div>
                    <div className="navitem face face2" onClick={ this.setCubeFace(2) }>
                        <i className="fa fa-podcast fa-lg"></i>
                    </div>
                    <div className="navitem face face5" onClick= { this.setCubeFace(5) }>
                        <i className="fa fa-clock-o fa-lg"></i>
                    </div>
                    <div className="navitem icon">
                    </div>
                </div>
                <div className={ controlClassName }>
                    <div className="navitem icon" onClick={ this.toggleCollapse() }>
                        <i className="fa fa-cube fa-lg"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
