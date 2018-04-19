import React from 'react';
import {observer} from 'mobx-react';



function CreateChannel(props) {
  //const authStore = props.authStore;
  const channelsStore = props.channelsStore;
  return (
    <div>
      <form>
        {channelsStore.error.length > 0 && (
          <div className="alert alert-danger" role="alert">{channelsStore.error}</div>
        )}
        <div className="form-group ml-3 mt-3">
          <h3> Channel Name: </h3>
          <input className="form-control ml-3 col-md-6"
            type="text"
            placeholder="Type the name of the Channel"
            value={channelsStore.channelName}
            required
            onChange={(e) => {
              channelsStore.channelName = e.target.value
              // we need to change it to submit button to store to the array
              channelsStore.error = [];
            }}/>
            <button className="btn btn-success ml-3 mt-3" type="submit">Create</button>
        </div>
      </form>
      <div className="text-center">
        <button className="mx-auto mt-3 btn btn-small btn-link"
          data-dismiss="modal"
          data-toggle="modal"
          data-target={props.target}
          onClick={() => channelsStore.error = []}>
          {props.alternateLinkText}
        </button>
      </div>
    </div>
  );
}

export default observer(CreateChannel);
