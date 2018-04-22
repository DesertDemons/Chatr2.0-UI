import React from 'react';
import {observer} from 'mobx-react';

function ChannelMsgs(props) {
	const msgsStore = props.msgsStore;
  	const messages = msgsStore.messages.length > 0 && msgsStore.messages.map((author) => 

  		
  		
  		<div className="card mt-3 ml-3 mr-3">
		  <div className="card-header">
		  	
		    	<strong>USERNAME:</strong> author.username
		    
		  </div>
		  <div className="card-body">
		    <blockquote className="blockquote mb-0">
		      <p><strong>Says : </strong><br></br>   {author.message}</p>
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

