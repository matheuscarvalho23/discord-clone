import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './style';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>general</Title>

      <Separator />

      <Description>Aqui você pode falar tuuuuudo</Description>
    </Container>
  );
}

export default ChannelInfo;