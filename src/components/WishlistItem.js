import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: block;
  width: 80vw;
  max-width: 500px;
  margin: 10px;
  padding: 15px 0 15px 20px;
  border-radius: 30px;
  border: 4px solid darkgreen;
  font-weight: bold;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #990000;
`;

export default function WishlistItem({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}

WishlistItem.propTypes = {
  title: PropTypes.string.isRequired,
};
