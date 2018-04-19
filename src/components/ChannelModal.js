import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import CreateChannel from './CreateChannel';



function ChannelModal(props) {
  const authStore = props.authStore;
  const channelsStore = props.channelsStore;
  const body = <CreateChannel target="#ChannelModal" alternateLinkText="Login by username" channelsStore={channelsStore} />;

  const createNewChannel = () => {
    const thisModal = window.$('#ChannelModal')
    channelsStore.PostChannel(authStore.token)
      .then(() => !channelsStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'ChannelModal',
    title: 'Channel name must be unique',
    body: body,
    clickHandler: createNewChannel,
    type: 'CreateChannel',
    channelsStore: channelsStore
  }

  return <Modal {...modalProps}/>;
  }

export default observer(ChannelModal);