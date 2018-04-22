import React from 'react';
import {observer} from 'mobx-react';

//components to display msgs and to send msgs
import ChannelMsgs from './ChannelMsgs'
import MessageForm from './MessageForm'

function ChatBox(props) {

  const channelsStore = props.channelsStore;
  const msgsStore = props.msgsStore;
  const authStore = props.authStore;
  const channelID = props.match.params.channelID;
  console.log(props.match.params.channelID);
    return (
      <div>
        <ChannelMsgs authStore={authStore}
                        channelsStore={channelsStore}
                        msgsStore={msgsStore}
                        />

        <MessageForm {...props} authStore={authStore}
                        channelsStore={channelsStore}
                        msgsStore={msgsStore}
                        channelID={channelID}/>
      </div>

    );
  }

  export default observer(ChatBox);
