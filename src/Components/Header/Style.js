import styled from 'styled-components';

export const Container = styled.div`
  padding-block: 3rem;
  background-color: #eaded7;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;
  flex-wrap: wrap;

  @media only screen and (max-width: 750px) {
    padding-block: 1.8rem;
    font-size: 1.5rem;
  }

  span {
    color: #ab7a5f;
    cursor: pointer;
  }
`;
