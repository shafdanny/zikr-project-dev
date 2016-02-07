/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './ItemElement.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class ItemElement extends Component {

	constructor(){
		super();
		this.state = {
			click: function(name, type){ 
				console.log(name + " : " + type );
				if(type === "video"){
					var videosource = $('video').find('source')[0];
					console.log(videosource);
					videosource.setAttribute("src", "video/"+name+"/WEBM/"+name+".webm");
					document.getElementById('background-video').load();
				}
				else if(type === "audio"){
					var audiosource = $('audio').find('source')[0];
					console.log(audiosource);
					audiosource.setAttribute("src", "audio/"+name);
				}
			}
		}		
	}

	static propTypes = {
	    name: PropTypes.string.isRequired,
	    type: PropTypes.string.isRequired,
	};

	click = function() {
		console.log('clicked');
	}

  	render() {
	    return (
	      <div className={s.root} id={this.props.name} onClick={this.state.click.bind(this,this.props.name, this.props.type)}>
	      	{this.props.name}
	      </div>
	    );
  }
}

export default ItemElement;
