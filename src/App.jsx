import './style/global.css';
import ClassicMode from './Components/Templates/ClassicMode/ClassicMode';
import ControlBtn from './Components/Atoms/ControlBtn/ControlBtn';
import { useState, useContext, useEffect, useRef } from 'react';
import { handleAction, handleNext, handlePrev } from './modules';
import { AppContext } from './context/Context';
import AudioPanel from './Components/Organisms/audioPanel/AudioPanel';
import MenuList from './Components/Organisms/MenuList/MenuList';
const App = () => {

  const { play, setPlay, index, musicList, setIndex } = useContext(AppContext)
  const ref = useRef(null);
  const [time, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
const [active,setActive]=useState(false)

  useEffect(() => {

    const audio = ref.current;
    const updateDuration = (event) => {
      setDuration(ref.current.duration);
    }
    console.log(index)
    if (play) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
    return () => {
      audio.addEventListener('loadedmetadata', updateDuration);
    }
  }, [play, index])

  
console.log(musicList)



  return (
    <div className="app">
    
      <ClassicMode >
        <section className='main-view'>
          <div className='design-container'>
            <div style={{ animationDelay: '-2s' }} className="design-item"></div>
            <div style={{ animationDelay: '-4s' }} className="design-item"></div>
            <div className="design-item"></div>

          </div>

          <article className='controls-panel'>
            <audio onTimeUpdate={
              () => {
                setCurrentTime(ref.current.currentTime)
              }
            } src={musicList[index].url} ref={ref} ></audio>
            <ControlBtn handleClick={() => {
              handlePrev(setIndex, musicList, ref.current)
              ref.current.play()
            }} src='/controlls/later.png' />
            <ControlBtn handleClick={() => {
              handleAction(setPlay)
            }}
              src={play ? '/controlls/pause.png' : '/controlls/play.png'} />
            <ControlBtn src='/controlls/next.png' handleClick={() => {
              handleNext(setIndex, musicList, ref.current)
              ref.current.play()
            }} />

          </article>
          <AudioPanel time={time} duration={duration}></AudioPanel>
          
            <MenuList active={active} setActive={setActive} handleClick={()=>{
              if(active===false){
                setActive(true)
              }else{
                setActive(false)
              }
            }}> </MenuList>
      
        </section>
      </ClassicMode>

    </div>
  )

}
export default App;