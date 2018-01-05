import { createStore } from 'redux';

export const ActionTypes =
{
    SET_AUDIO_STREAM: 'SET_AUDIO_STREAM',
    SET_CUBE_ANIMATE: 'SET_CUBE_ANIMATE',
    SET_CUBE_FACE: 'SET_CUBE_FACE',
    SET_LOCATION: 'SET_LOCATION',
    SET_TIME: 'SET_TIME',
    TOGGLE_AUDIO_STREAM_PLAYING: 'TOGGLE_AUDIO_STREAM_PLAYING'
}

const initialState =
{
    cube:{
        animate:true,
        face:-1
    },
    audioStream:{name:'SOMAFM - Groove Salad', url:'http://ice1.somafm.com/groovesalad-128-aac'},
    audioStreamPlaying:false,
    location:'',
    streams:[
        {name:'SOMAFM - Groove Salad', url:'http://ice1.somafm.com/groovesalad-128-aac'},
        {name:'SOMAFM - Lush', url:'http://ice1.somafm.com/lush-128-aac'},
        {name:'SOMAFM - Beat Blender', url:'http://ice1.somafm.com/beatblender-128-aac'},
        {name:'SOMAFM - Suburbs of Goa', url:'http://ice1.somafm.com/suburbsofgoa-128-aac'},
        {name:'KQED Live Stream', url:'https://streams2.kqed.org/kqedradio'}
    ],
    time:(new Date())
}

function borgLiveStore (state = initialState, action)
{
    switch (action.type)
    {
        case ActionTypes.SET_AUDIO_STREAM:
            state.audioStream = action.audioStream;
            state.audioStreamPlaying = false;
            return state;
        case ActionTypes.SET_CUBE_ANIMATE:
            state.cube['animate'] = action.animate;
            return state;
        case ActionTypes.SET_CUBE_FACE:
            state.cube['face'] = action.face;
            return state;
        case ActionTypes.SET_LOCATION:
            state.location = action.location;
            return state;
        case ActionTypes.SET_TIME:
            state.time = action.time;
            return state;
        case ActionTypes.TOGGLE_AUDIO_STREAM_PLAYING:
            state.audioStreamPlaying = !state.audioStreamPlaying;
            return state;
        default:
            return state;
    }
}

export default createStore(borgLiveStore);
