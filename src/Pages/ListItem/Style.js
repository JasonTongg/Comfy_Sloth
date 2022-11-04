import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding-block: 2rem;
  width: 100%;
  position: relative;
  align-items: flex-start;
`;

export const Filter = styled.div`
  width: 100%;
  position: sticky;
  left: 0;
  top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.5rem 0.8rem;
    border: none;
    background-color: var(--darkWhite);
    font-size: 1rem;
  }

  button {
    background-color: red;
    color: white;
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

export const Items = styled.div`
  width: 100%;
`;

export const Components = styled.div`
  width: 100%;
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  button {
    color: rgba(0, 0, 0, 0.6);
    padding-block: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.8rem;
    text-transform: capitalize;
    letter-spacing: 2px;

    &.active {
      border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Companies = styled.select`
  padding: 0.2rem 0.3rem;
  border: 2px solid black;
  border-radius: 5px;
  option {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export const Colors = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & > * {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.5;
    cursor: pointer;
    margin: 5px;

    &.all {
      border-radius: 0;
    }

    &.all.active {
      border-bottom: 1px solid black;
    }

    &.color.active {
      opacity: 1;
      & > * {
        color: white;
      }
    }
  }
`;

export const Shipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;

  input {
    width: 15px;
    height: 15px;
  }
`;

export const Price = styled.div`
  width: 80%;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 80px 140px auto 230px;
  gap: 1rem;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  & > * {
    padding: 1px 3px;
    border: 1px solid black;
    font-size: 100%;
    border-radius: 3px;
    cursor: pointer;

    &.active {
      color: white;
      background: black;
    }
  }
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  select {
    padding: 0.2rem 1rem;
    border: none;
  }
`;
