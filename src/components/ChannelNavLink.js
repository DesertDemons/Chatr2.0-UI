import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'

function ChannelNavLink(props) {
  return (
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title={props.channel.name}>
      <NavLink className="nav-link" to={`/channels/${props.channel.id}`}
      			onClick={() => props.channelsStore.setChannel(props.channel)+
      						   props.getMsgs(props.channel.id, props.token)
      			}>
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {props.channel.name}</span>
      </NavLink>
    </li>
  );
}

export default ChannelNavLink;
