import React from 'react';
import {observer} from 'mobx-react';

function ChannelMsgs(props) {
	const msgsStore = props.msgsStore;
  	const messages = msgsStore.messages.length > 0 && msgsStore.messages.map((author) => 

  		<div class="card">
		  <div class="card-header">
		    Username: {author.username}
		  </div>
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p>Msg :{author.message}</p>
		    </blockquote>
		  </div>
		</div>
  		 
													  					    )
      return (
        <div>
          {messages}
        </div>

        );
      }


export default observer(ChannelMsgs);

