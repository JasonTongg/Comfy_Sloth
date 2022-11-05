import styled from 'styled-components';

export const Container = styled.div`
  padding-block: 3rem;
  background-color: var(--secondaryColor);
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;

  span {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
