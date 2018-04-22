import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {observer} from 'mobx-react';
// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import CreateChannel from './components/CreateChannel';
import ChatBox from './components/ChatBox';
import MessageForm from './components/MessageForm';
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Loading from './components/Loading';


function App(props) {
  const authStore = props.authStore;
  const channelsStore = props.channelsStore;
  const msgsStore = props.msgsStore;
  return (
    <div className="content-wrapper">
    
      <Switch>
      
      <Route exact path='/' render={() => 
        <Welcome authStore={authStore}/>}/> 
      <Route exact path='/index.html' render={() => 
        <Welcome authStore={authStore}/>}/>
      
      <Route path='/channels/:channelID'
                      render={
                        props => 
                              <ChatBox {...props}
                                        authStore={authStore}
                                        channelsStore={channelsStore}
                                        msgsStore={msgsStore}/>
                      }/>
        
        <Route path='/createChannel'
               render={
                 props => <CreateChannel {...props} authStore={authStore} channelsStore={channelsStore}/>
               }/>
      </Switch>
      
      <NavBar authStore={authStore} channelsStore={channelsStore} msgsStore={msgsStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal {...props} authStore={authStore}/>
      <Footer />
      
    </div>
  );
}

export default withRouter(observer(App));
