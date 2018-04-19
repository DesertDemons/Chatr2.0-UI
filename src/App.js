import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {observer} from 'mobx-react';
// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import ChannelModal from './components/ChannelModal';
import MessageForm from './components/MessageForm';
import ChannelMsgs from './components/ChannelMsgs';


function App(props) {
  const authStore = props.authStore;
  const channelsStore = props.channelsStore;
  const msgsStore = props.msgsStore;
  return (
    <div className="content-wrapper">
      <Switch>
      <Route path='/channels/:channelID'
                      render={
                        props => <ChannelMsgs {...props}
                          authStore={authStore}
                          channelsStore={channelsStore}
                          msgsStore={msgsStore}/>
                      } />
        
        <Route path='/createChannel'
               render={
                 props => <ChannelModal {...props} authStore={authStore} channelsStore={channelsStore}/>
               }/>
      </Switch>
      <NavBar authStore={authStore} channelsStore={channelsStore} msgsStore={msgsStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal {...props} authStore={authStore}/>
      <MessageForm onMessageSend={this.handleNewMessage} />
      <Footer />
    </div>
  );
}

export default withRouter(observer(App));
