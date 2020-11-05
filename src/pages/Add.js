import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AddButton from '../components/AddButton';

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
`;

export default function Add() {
  return (
    <HomeSection>
      <h1>Add new person</h1>
      <Link to="/">
        <AddButton>Back</AddButton>
      </Link>
    </HomeSection>
  );
}
