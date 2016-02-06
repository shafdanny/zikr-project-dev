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
import Link from '../Link';
import Navigation from '../Navigation';

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
    this.play();
  }

  endOfAudio(){
    console.log(self.counter)
    if(self.counter != 0){
      self.counter = self.counter - 1;
      self.audio.play();
    }
  }

  play(){
    self.audio.play();
    self.playing = true;
  }

  pause(){
    self.audio.pause();
    self.playing = false;
  }

  playPauseClick() {
    if(self.playing)
      self.pause();
    else
      self.play();
  }


  render() {
    return (
      <div className={s.root}>
        <button onClick={this.playPauseClick}>Stop</button>
        
      </div>
    );
  }

}

export default AudioPlayer;
