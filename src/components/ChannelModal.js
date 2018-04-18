import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import CreateChannel from './CreateChannel';



function ChannelModal(props) {
  const channelsStore = props.channelsStore;
  const body = <CreateChannel channelsStore={channelsStore} />;

  const ChannelCreate = () => {
    const thisModal = window.$('#CreateChannel')
    channelsStore.ChannelCreate()
      .then(() => !channelsStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'CreateChannel',
    title: 'Channel name must be unique',
    body: body,
    clickHandler: ChannelCreate,
    type: 'CreateChannel',
    channelsStore: channelsStore
  }

  return <Modal {...modalProps}/>;
  }

export default observer(ChannelModal);