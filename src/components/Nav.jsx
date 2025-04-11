import { useState, useRef } from 'react';

import logo from '../assets/logo.png';
import NavAudio from '../assets/audio.mp3'; // Replace with your audio file path

import { IoVolumeMuteOutline, IoVolumeHighOutline } from 'react-icons/io5';

function Nav() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(NavAudio)); // Replace with your audio path

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className='container nav-container'>
      <a href="#" className='logo'>
        <img src={logo} alt="Logo" />
      </a>

      <div className="socials">
        <button className='volume' onClick={toggleAudio}>
          {isPlaying ? (
            <IoVolumeHighOutline className="playing-icon" />
          ) : (
            <IoVolumeMuteOutline />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Nav;