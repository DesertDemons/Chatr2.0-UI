import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class ChannelsStore {
	constructor(){
		this.channels = [];
		this.error = [];
	}

	GetChannels() {
    	return axios.get('http://192.168.100.54/channels/')
	    .then(response => response.data)
	    .then(channelList => {
	    	this.channels = channelList;
	      })
	    
	    .catch(error => console.error(error));
  	}



}

decorate(ChannelsStore, {
  channels: observable,
  error: observable,
})

const channelsStore =  new ChannelsStore()
channelsStore.GetChannels();

export default channelsStore;