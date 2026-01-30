import { useState } from 'react';
import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceStyle, setDanceStyle] = useState('dance');

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const changeDanceStyle = (style) => {
    setDanceStyle(style);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>

      <div className="stage">
        <div className="sparkles">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="sparkle" style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.3}s`
            }}>&#10022;</span>
          ))}
        </div>

        <div
          className={`cat-wrapper ${isPlaying ? danceStyle : 'paused'}`}
          onClick={toggleAnimation}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleAnimation()}
          aria-label={isPlaying ? 'Click to pause animation' : 'Click to play animation'}
        >
          <img src={catSvg} alt="Dancing Cat" className="cat-image" />
        </div>

        <div className="floor"></div>
      </div>

      <div className="controls">
        <button
          className={`control-btn ${isPlaying ? 'active' : ''}`}
          onClick={toggleAnimation}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>

        <div className="dance-styles">
          <button
            className={`style-btn ${danceStyle === 'dance' ? 'active' : ''}`}
            onClick={() => changeDanceStyle('dance')}
          >
            Dance
          </button>
          <button
            className={`style-btn ${danceStyle === 'jump' ? 'active' : ''}`}
            onClick={() => changeDanceStyle('jump')}
          >
            Jump
          </button>
          <button
            className={`style-btn ${danceStyle === 'sway' ? 'active' : ''}`}
            onClick={() => changeDanceStyle('sway')}
          >
            Sway
          </button>
        </div>
      </div>

      <p className="hint">Click on the cat or use controls!</p>
    </div>
  );
}

export default DancingCat;
