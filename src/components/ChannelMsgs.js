import React from 'react';
import {observer} from 'mobx-react';

function ChannelMsgs(props) {
	const msgsStore = props.msgsStore;
  	const messages = msgsStore.messages.length > 0 && msgsStore.messages.map((author) => 

  		<div class="card mt-3 ml-3 mr-3">
		  <div class="card-header">
		    <strong>USERNAME:</strong> {author.username}
		  </div>
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p><strong>Says : </strong><br></br>{author.message}</p>
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

