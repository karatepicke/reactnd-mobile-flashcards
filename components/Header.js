import React from 'react';

// UI
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

class FlashcardsHeader extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Mobile Flashcards</Title>
            <Subtitle>An example App by Dominik Pickenäcker</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>
    )
  }
}

export default FlashcardsHeader;
