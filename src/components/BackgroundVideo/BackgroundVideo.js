/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './BackgroundVideo.scss';
import withStyles from '../../decorators/withStyles';


@withStyles(s)
class BackgroundVideo extends Component {

  render() {
    return (
      <div className={s.root}>
        <video loop muted autoPlay poster="img/videoframe.jpg" className={s.vid}>
            <source src="video/Agua-natural/Webm/Agua-natural.webm" type="video/webm" />
        </video>
      </div>
    );
  }

}

export default BackgroundVideo;
