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

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-block: 3.5rem;
  gap: 2.8rem;
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 1rem;

  & > *:first-child {
    justify-self: flex-start;
  }

  & > *:last-child {
    justify-self: flex-end;
    color: var(--primaryColor);
  }
`;
