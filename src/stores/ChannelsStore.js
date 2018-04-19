import React from 'react';
import {decorate, observable, computed} from 'mobx';
import axios from 'axios';


class ChannelsStore {
	constructor(){
		this.channels = [];
		this.channelName = "";
		this.selectedChannel = {};
		this.loading = true;
		this.error = [];
	}

	GetChannels() {
    	return axios.get('http://192.168.100.54/channels/')
	    .then(response => response.data)
	    .then(channelList => {
	    	this.channels = channelList;
	    	this.loading = false;

	      })
	    
	    .catch(error => console.error(error));
  	}

  	// to Post a channel (create a channel) on the server
  	PostChannel(token){
  		return axios.post('http://192.168.100.54/channels/create/',{name: this.channelName},
	    {headers: {Authorization: `JWT ${token}` }})
	  	.then(res => res.data)
	  	.then(this.resetForm())
	  	.then(this.GetChannels())
	  	.catch(err => console.error(err));
	}
	
	// getAllMessages(token) {
	//    let latestTimestamp;
 //  	   axios.get('http://192.168.100.54/channels/'`${this.selectedChannel.id}/`+ `?latest=${latestTimestamp || ""}`,{headers: {Authorization: `JWT ${token}` }})
	//    .then(response => response.data)
	//    .then(messages => 
	//    	{
	//    	this.selectedChannel.messages = messages
	//    	if(messages.length){
 //      		  latestTimestamp = messages.pop().timestamp;
 //       	}
 //       })
 //       .catch(err => console.error(err));
 //    }
  

	setChannel(channel,id) {
     this.selectedChannel = channel;
     this.getAllMessages();
    }

	

	//this is to reset the forms
	resetForm() {
    this.error = [];
    this.channelName = "";
    this.selectedChannel = {};
  	}

}

decorate(ChannelsStore, {
  channels: observable,
  error: observable,
  channelName: observable,
  selectedChannel: observable,
})

const channelsStore =  new ChannelsStore()
channelsStore.GetChannels();

export default channelsStore;