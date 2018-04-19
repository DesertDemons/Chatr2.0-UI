import React from 'react';
import {decorate, observable} from 'mobx';
import axios from 'axios';


class MsgsStore {
  constructor() {
    this.messages = [];
    this.sendMessageContent = "";
    this.error = [];
  }


  getMsgs(channelID, token) {

    return axios.get(`http://192.168.100.54/channels/${channelID}/`,{headers: {Authorization: `JWT ${token}` }})
           //.then(res => res.data)
           .then(newMessages => {
             console.log(newMessages);
             this.messages = newMessages;
           })
           .catch(err => console.error(err));
  }





  // sendMsgs(channelID, token) {
  //  return axios.post(
  //    `http://192.168.100.54/channels/${channelID}/send/`,
  //    {message: this.sendMessageContent},
  //    {headers: {Authorization: `JWT ${token}` }}
  //  )
  //  .then(res => res.data)
  //  .then(message => {
  //    this.resetForm();
  //  })
  //  .catch(err => console.error(err));
  // }







  resetForm() {
   this.error = [];
   this.sendMessageContent = "";
  }

}






decorate(MsgsStore, {
  messages: observable,
  sendMessageContent: observable,
  error: observable,
})

const msgsStore =  new MsgsStore()
msgsStore.getMsgs();


export default msgsStore;