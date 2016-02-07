/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './List.scss';
import withStyles from '../../decorators/withStyles';
import ItemElement from '../ItemElement'

@withStyles(s)
class List extends Component {

	static propTypes = {
	    mediaType: PropTypes.string,
	    list: PropTypes.array,
	};

  	render() {

	    return (
	      <div className={this.props.mediaType}>
	      <ul>
	     	{this.props.list.map(function(listValue){
	     		return ( 
            		<li>
            			<ItemElement name={listValue.fileName} type={listValue.type} />
            		</li>
            	);
          })}
	      </ul>
	      </div>
	    );
  }
}

export default List;
