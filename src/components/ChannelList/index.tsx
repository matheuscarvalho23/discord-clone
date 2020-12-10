import React from 'react';

import { Container, AddCategoryIcon, Category } from './style';
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="general" />
      <ChannelButton channelName="CS GO" />
      <ChannelButton channelName="Among US" />
      <ChannelButton channelName="Adulto 🔞" />
      <ChannelButton channelName="Memes" />
    </Container>
  );
}

export default ChannelList;