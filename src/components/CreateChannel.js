import React from 'react';
import {observer} from 'mobx-react';



function CreateChannel(props) {
  const authStore = props.authStore;
  const channelsStore = props.channelsStore;
  let chanName = "";
  return (
    <div>
      <form>
        {channelsStore.error.length > 0 && (
          <div className="alert alert-danger" role="alert">{channelsStore.error}</div>
        )}
        <div className="form-group ml-3 mt-3">
          <h3> Enter Channel Name: </h3>
          <input className="form-control ml-3 col-md-6"
            type="text"
            placeholder="Type the name of the Channel"
            value={channelsStore.channelName}
            required
            onChange={(e) => {
              channelsStore.channelName = e.target.value
              chanName = e.target.value
              channelsStore.error = [];
            }}/>
            <button type="submit" class="btn btn-success ml-3 mt-3" onClick= {() => {
              channelsStore.PostChannel(channelsStore.channelName, authStore.token)
              alert(`The channel ${chanName} was added!`);
            }}>Create</button>
            
        </div>
      </form>
      
    </div>
  );
}

export default observer(CreateChannel);
