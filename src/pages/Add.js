import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
import AddButton from '../components/AddButton';
import { postList } from '../api/api';

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
`;

const Form = styled.form``;

const ErrorMessage = styled.p`
  color: red;
`;

const Add = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const history = useHistory();

  function handleChange(event) {
    setTitle(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(null);
      const newList = await postList({
        title,
        wishes: [],
      });
      history.push(`/${newList.id}`);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeSection>
      <h1>More loved ones to buy presents for...</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>
        <input type="submit" value="Submit" />
      </Form>
      <Link to="/">
        <AddButton>←</AddButton>
      </Link>
      {loading && <div>Loading...</div>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </HomeSection>
  );
};
export default Add;
