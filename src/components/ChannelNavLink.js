import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'
import {observer} from 'mobx-react';
import {Switch, Route, withRouter} from 'react-router-dom';

function ChannelNavLink(props) {
	//console.log(props.msgsStore);
	//console.log(props.channel.id)
  return (
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title={props.channel.name}>
      <NavLink className="nav-link" to={`/channels/${props.channel.id}`}
      			onClick={
      				() => {
      					props.channelsStore.setChannel(props.channel)
      					props.msgsStore.getMsgs(props.channel.id, props.authStore.token)
      				}
      			}>
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {props.channel.name}</span>
      </NavLink>
    </li>
  );
}

export default withRouter(observer(ChannelNavLink));
