import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import CreateChannel from './CreateChannel';




function ChannelModal(props) {
  const ChannelsStore = props.ChannelsStore;
  const body = <CreateChannel ChannelsStore={ChannelsStore} />;

  const ChannelCreate = () => {
    const thisModal = window.$('#CreateChannel')
    ChannelsStore.ChannelCreate()
      .then(() => !ChannelsStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'CreateChannel',
    title: 'Channel name must be unique',
    body: body,
    clickHandler: ChannelCreate,
    type: 'CreateChannel',
    ChannelsStore: ChannelsStore
  }

  return <Modal {...modalProps}/>;
  }

export default observer(ChannelModal);