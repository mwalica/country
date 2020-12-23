import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Form from './components/Form';
import CountryInfo from './components/CountryInfo';

import { theme } from './style/theme';

const App = () => {
  const [searchCountry, setSearchCountry] = React.useState('');

  const onSubmit = (newSearch) => {
    setSearchCountry(newSearch);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Form onSubmit={onSubmit} />
        <CountryInfo searchCountry={searchCountry} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  width: 80%;
  max-width: 720px;
  margin: 0 auto;
`;

export default App;
