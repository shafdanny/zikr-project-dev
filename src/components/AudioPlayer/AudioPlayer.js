/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
 /* global $:false */

import React, { Component, PropTypes } from 'react';
import s from './AudioPlayer.scss';
import withStyles from '../../decorators/withStyles';
import Audio from '../Audio';

@withStyles(s)
class AudioPlayer extends Component {

  static propTypes = {
    audioSrc: PropTypes.string.isRequired,
    nbRepeat: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      play() {
        self.audio.play();
        self.playing = true;
        document.getElementById('btn').textContent = 'Pause';
      },

      pause() {
        self.audio.pause();
        self.playing = false;
        document.getElementById('btn').textContent = 'Play';
      },

      playPauseClick() {
        self.audio.load();
        console.log('onClick, playing: ' + self.playing);
        if (self.playing) {
          this.state.pause();
        } else {
          this.state.play();
        }
      },

      endOfAudio() {
        console.log(self.counter);
        if (self.counter !== 0) {
          self.counter = self.counter - 1;
          this.state.play();
        } else {
          console.log('end of audio');
          pause();
        }
      },
    };
  }

  componentDidMount() {
    console.log('mounted');
    this.updateAudio();

    // self.audio.src = this.props.audioSrc;
    self.counter = this.props.nbRepeat;
    self.audio.addEventListener('ended', this.state.endOfAudio);

    self.counter -= 1;
    this.state.pause();
  }

  // Always call this function before doing anything with audio.
  // This is because the audio could be changed by another element.
  updateAudio() {
    self.audio = document.getElementById('audio-current');
    console.log(self.audio);
    self.audio.load();
    console.log(self.audio);
  }

  render() {
    return (
      <div className={s.root}>
        <button id="btn" onClick={this.state.playPauseClick.bind(this)}></button>
        <Audio src={this.props.audioSrc}/>
      </div>
    );
  }

}

export default AudioPlayer;
