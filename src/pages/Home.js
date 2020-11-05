import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import WishlistItem from '../components/WishlistItem';
import AddButton from '../components/AddButton';
import { getLists } from '../api/api';

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
`;

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <HomeSection>
      <h1>Merry Christmas</h1>
      {lists?.map((list) => (
        <Link key={list.id} to={`/${list.id}`}>
          <WishlistItem title={list.title} />
        </Link>
      ))}
      <Link to="/add">
        <AddButton>+</AddButton>
      </Link>
    </HomeSection>
  );
};
export default Home;
