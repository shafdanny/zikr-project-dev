/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/* global $:false */
import React, { Component } from 'react';
import s from './ListItem.scss';
import withStyles from '../../decorators/withStyles';
import List from '../List';

@withStyles(s)
class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      list: {
        audio: [],
        video: [],
      },
    };
  }

  componentDidMount() {
    console.log('trying to contact server');
    this.serverRequest = $.get('/api/media/list', function (result) {
      console.log(result);
      this.setState({ list: result });
    }.bind(this));
  }

  render() {
    return (
      <div className={s.root}>
        <List list={this.state.list.audio} mediaType="audio" />
        <List list={this.state.list.video} mediaType="video" />
      </div>
    );
  }
}

export default ListItem;
