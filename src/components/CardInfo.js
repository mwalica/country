import React from 'react';
import styled from 'styled-components';

const CardInfo = ({ country }) => {
  console.log(country);
  const { name, nativeName, capital, population, altSpellings, flag, demonym } = country;
  return (
    <Wrapper>
      <h3>{name}</h3>
      <Table>
        <tbody>
          <tr>
            <TdName>Native Name: </TdName>
            <TdValue>{nativeName}</TdValue>
          </tr>
          <tr>
            <TdName>Country Code (ISO 3166): </TdName>
            <TdValue>{altSpellings[0]}</TdValue>
          </tr>
          <tr>
            <TdName>Capital: </TdName>
            <TdValue>{capital}</TdValue>
          </tr>
          <tr>
            <TdName>Population: </TdName>
            <TdValue>{population}</TdValue>
          </tr>
          <tr>
            <TdName>Flag: </TdName>
            <TdValue>
              <Img className="flag" src={flag} alt={`${demonym} flag`} />
            </TdValue>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  td {
    padding: 0.6em 0.2em;
  }
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.bgColorDark};
  }
`;

const TdName = styled.td`
  width: 50%;
  text-align: right;
`;

const TdValue = styled.td`
  font-weight: 600;
  text-align: left;
`;

const Img = styled.img`
  width: 100px;
  box-shadow: ${({ theme }) => theme.boxShadow2};
`;

export default CardInfo;
