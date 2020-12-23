import React from 'react';
import styled from 'styled-components';
import { theme } from '../style/theme';

const Form = ({ onSubmit }) => {
  const [country, setCountry] = React.useState('');
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(country);
  };

  return (
    <Wrapper onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="country">Country search</Label>
      <Field>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="enter country"
          value={country}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </Field>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  padding: 1em 2em 2em;
  box-shadow: ${({theme}) => theme.boxShadow};
  background-color: #fff;
  border-radius: 6px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Field = styled.div`
  display: flex;
  width: 100%;
  input {
    flex: 3;
    padding: 0.6em 1em;
    font-family: ${({ theme }) => theme.fontFamily};
    border: 1px solid ${({theme}) => theme.bgColorDark};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bgcolor};

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #d8e2f1;
    }
  }

  button {
    flex: 1;
    margin-left: 8px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 3px;
    background-color: ${({ theme }) => theme.primary};
    padding: 0.6em 1em;
    font-family: ${({ theme }) => theme.fontFamily};
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export default Form;
