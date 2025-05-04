import './AudioPanel.css'
const AudioPanel = (props) => {
    const {duration,time} = props;

   
    return (

        <div className="audio-panel">
            <div className='audio-panel-progress'>
                <div style={{width:(time/duration*100)+'%'}} className='audio-panel-progress-percent'></div>
            </div>
            <div className='audio-panel-controls'>
            <button id='mute' > <img src="/controlls/mute.png" alt="" /></button>  
            <div id='time'>{time.toFixed(1)}:{Math.trunc(duration/60)}.{(duration%60).toFixed(0)}</div>
            <button id='repeat'><img src="/controlls/repeat.png" alt="" /></button>
            </div>
           
        </div>
    )
}

export default AudioPanel