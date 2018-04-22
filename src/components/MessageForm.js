import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';
import {Switch, Route, withRouter} from 'react-router-dom';

 
// class MessageForm extends Component {
//   constructor(props) {
//     super(props);
//   }
function MessageForm(props) {
  
  const channelsStore = props.channelsStore;
  const authStore = props.authStore;
  const msgsStore = props.msgsStore;
  const channelID = props.channelID;
  // static propTypes = {
  //   onMessageSend: PropTypes.func.isRequired,
  // }
 
  // componentDidMount = () => {
  //   this.input.focus()
  // }
 
  // handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.channelsStore.sendMessageContent(this.input.value)
  //   this.input.value = ""
  // }
  
  // render() {
    return (
      //onSubmit={this.handleFormSubmit} MessageForm ml-3 mr-3 mt-3 input-container button-container
      /*<form className="MessageForm ml-3 mr-3 mt-3" >
        <div className="input-container">
          <input
            type="text"
            //ref={(node) => (this.input = node)}
            placeholder="Enter your message…"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit"
          onChange={(e) => {
              props.msgsStore.sendMessageContent = e.target.value
              props.channelsStore.error = [];

            }}
          onClick={(e) =>
                  {
                    e.preventDefault();
                    props.msgsStore.sendMsgs(channelID, props.authStore.token)
                    props.msgsStore.getMsgs(channelID, props.authStore.token)
                  }
                  }>Send
            
          </button>
          
        </div>
      </form> */



      <div>
        <div className="container fixed-bottom ">
          <div className="input-group-prepend ml-5 ">
            <textarea onChange={ (e) => {
                                props.msgsStore.sendMessageContent = e.target.value

                              }} className="form-control input-container ml-5" aria-label="With textarea"></textarea>
            <button type="button" className="button-container MessageForm btn btn-primary"
                    onClick={(e) =>
                    {
                      props.msgsStore.sendMsgs(channelID, props.authStore.token)
                      props.msgsStore.getMsgs(channelID, props.authStore.token)
                    }
                    }>Send</button>
          </div>
          

        </div>
    </div>
    );
  // }
}
 
                    
export default withRouter(observer(MessageForm));