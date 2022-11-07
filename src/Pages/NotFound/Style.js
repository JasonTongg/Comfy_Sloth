import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 4rem;
  background-color: var(--white);
  color: var(--primaryColor);
  height: calc(100vh - 88px - 99.31px);
  a {
    text-decoration: none;
    color: var(--white);
    background-color: var(--primaryColor);
    padding: 0.3rem 0.5rem;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  svg {
    font-size: 8rem;
  }
`;
