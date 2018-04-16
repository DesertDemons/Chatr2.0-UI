import React from 'react';
import {observer} from 'mobx-react';

// Components
import Modal from './Modal';
import CreateChannelForm from './CreateChannelForm';




function ChannelModal(props) {
  const authStore = props.authStore;
  const body = <CreateChannelForm authStore={authStore} />;

  const ChannelCreate = () => {
    const thisModal = window.$('#CreateChannel')
    authStore.ChannelCreate()
      .then(() => !authStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'CreateChannel',
    title: 'Type the name of the channel',
    body: body,
    clickHandler: ChannelCreate,
    type: 'CreateChannel',
    authStore: authStore
  }

  return <Modal {...modalProps}/>;
  }

export default observer(ChannelModal);