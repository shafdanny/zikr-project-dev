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
  };

  componentDidMount() {
    console.log("audio mounted");
    console.log(this.props.audioSrc);

    var audio = document.getElementById("audio").play();
    audio.autoplay = false;
    console.log(audio);
  }

  render() {
    return (
      <div className={s.root}>
        <audio id="audio">
          <source type="audio/mpeg" src={this.props.audioSrc} >
            Your browser does not support the audio element.</source>
        </audio>
        
      </div>
    );
  }

}

export default AudioPlayer;
