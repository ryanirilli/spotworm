import * as React from 'react';
import styled, { theme } from '../../theme';

const Container = styled.div`
  color: ${theme.primaryColor};
  display: flex;
  justify-content: center;
`;

class SpotifyTypeahead extends React.Component {
  public render() {
    return (
      <Container>
        <input type="text" />
      </Container>
    );
  }
}

export default SpotifyTypeahead;
