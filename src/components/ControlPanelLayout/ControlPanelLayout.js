/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './ControlPanelLayout.scss';
import withStyles from '../../decorators/withStyles';
import ListItem from '../ListItem';
import AudioPlayer from '../AudioPlayer';


@withStyles(s)
class ControlPanelLayout extends Component {

  render() {
    return (
      <div className={s.root}>
        <ListItem />
        <AudioPlayer audioSrc="audio/Munif Ahmad - Zikir Lailahaillallah & Astaghfirullah (Official Music Audio).mp3" nbRepeat="1"/>
      </div>
    );
  }

}

export default ControlPanelLayout;
