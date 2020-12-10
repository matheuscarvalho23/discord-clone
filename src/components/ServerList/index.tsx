import React from 'react';

import ServerButton from '../ServerButton'
import { Container, Separator } from './style';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome mentions={5} selected />

      <Separator />

      <ServerButton />
      <ServerButton hasNotification/>
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton isSound />
      <ServerButton hasNotification/>
      <ServerButton />
      <ServerButton />

      <Separator />
    </Container>
  );
}

export default ServerList;