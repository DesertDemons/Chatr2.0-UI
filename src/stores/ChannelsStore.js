import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class ChannelsStore {
	constructor(){
		this.channels = [];

	}

	GetChannels() {
    	return axios.get('http://192.168.100.54/channels/')
	    channels: this.channels
	    .then(response => response.data)
	    .then(channelList => {
	    	this.channels = channelList;
	    	console.log(this.channels);
	    	console.log(channelList);
	    	// console.log(channelList);
	     //  channelList.forEach(function (channel){
	     //      this.channels.push(channel);
	      });
	    })
	    .catch(error => console.error(error));
  	}



}

decorate(ChannelsStore, {
  channels: observable,
  
})

const channelsStore =  new ChannelsStore()
channelsStore.fetchAuthors();

export default channelsStore;