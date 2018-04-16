import React from 'react';
import {observer} from 'mobx-react';


function CreateChannel(props) {
  const authStore = props.authStore;
  return (
    <div>
      <form>
        {authStore.error.length > 0 && (
          <div className="alert alert-danger" role="alert">{authStore.error}</div>
        )}
        <div className="form-group">
          <input className="form-control"
            type="text"
            placeholder="Type the name of the Channel"
            value={authStore.channels}
            required
            onChange={(e) => {
              const textTyped = e.target.value;
              authStore.channels = textTyped;
              // we need to change it to submit button to store to the array
              authStore.error = [];
            }}/>
        </div>
      </form>
      <div className="text-center">
        <button className="mx-auto mt-3 btn btn-small btn-link"
          data-dismiss="modal"
          data-toggle="modal"
          data-target={props.target}
          onClick={() => authStore.error = []}>
          {props.alternateLinkText}
        </button>
      </div>
    </div>
  );
}

export default observer(CreateChannel);
