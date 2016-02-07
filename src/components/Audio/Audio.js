/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './Audio.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class Audio extends Component {


  static propTypes = {
    
  };


  render() {
    return (
      <audio className={s.root} id="audio-current">
        <source src={this.props.src}  type="audio/mp3" />
      </audio>
    );
  }
}

export default Audio;
