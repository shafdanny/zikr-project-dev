/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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


  componentDidMount() {
    self = this;
    console.log("mounted");
    self.audio = document.createElement('audio');

    self.audio.src = this.props.audioSrc;
    self.counter = this.props.nbRepeat;
    console.log(self);
    
    self.audio.addEventListener('ended', self.endOfAudio);

    self.counter -= 1;
    self.pause();
  }

  endOfAudio(){
    console.log(self.counter);
    if(self.counter != 0){
      self.counter = self.counter - 1;
      self.audio.play();
    }
    else{
      self.pause();
    }
  }

  play(){
    self.audio.play();
    self.playing = true;
    document.getElementById("btn").textContent = "Pause";

  }

  pause(){
    self.audio.pause();
    self.playing = false;
    document.getElementById("btn").textContent = "Play";
  }

  playPauseClick() {
    console.log("onClick, playing: "  + self.playing);
    if(self.playing){
      self.pause();
    }
    else{
      self.play();
    }
  }



  render() {
    return (
      <div className={s.root}>
        <button id="btn" onClick={this.playPauseClick}></button>
        <Audio src={this.props.audioSrc}/>
      </div>
    );
  }

}

export default AudioPlayer;
