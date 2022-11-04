import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--darkWhite);
  padding-block: 6rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.6rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--darkWhite);
    background-color: var(--primaryColor);
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
  }
`;

export const Line = styled.div`
  width: 100px;
  height: 4px;
  background-color: var(--primaryColor);
  margin-top: 0.5rem;
`;
