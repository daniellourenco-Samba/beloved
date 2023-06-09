import React, { useRef, useState, useEffect } from 'react';
import './player.css';
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs';

const Player = ()=> {

  const musga = {
    "title": "AI MEU DEUS COMO EU TE AMO MO!",
    "url" : "https://freetouse.com/data/mp3/shandr-drifting-away.mp3"   
  }

  const clickRef = useRef();
  const [isplaying, setisplaying] = useState(false);
  const audioElem = useRef();
  const [song, setSong] = useState(musga);

  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setSong({ ...song, "progress": ct / duration * 100, "length": duration })

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * song.length;

  }

  return (
    <div className='player_container'>
      <audio src={song.url} ref={audioElem} onTimeUpdate={onPlaying} />  
      <div className="title">
        <p>{song.title}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${song.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls">
     
        {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}   
      </div>
    </div>
  
  )
}

export default Player