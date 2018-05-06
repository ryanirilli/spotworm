import * as React from 'react';
import styled, { injectGlobal, theme } from './theme';
import SpotifyTypeahead from './components/SpotifyTypeahead';
import { Padding } from './components/Layout';

injectGlobal`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

const Container = styled.div`
  height: 100vh;
  background: ${theme.primaryColor};
`;

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Padding vertical={10}>
          <SpotifyTypeahead />
        </Padding>
      </Container>
    );
  }
}

export default App;
