import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding-block: 2rem;
  width: 100%;
  position: relative;
  align-items: flex-start;
  background-color: var(--white);

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px auto;
  }
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

  @media only screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px 70px 70px 40px 40px;
    justify-items: center;
    align-items: center;
    gap: 2rem;
    position: relative;
  }

  @media only screen and (max-width: 420px) {
    grid-template-columns: 1fr;
  }

  input {
    width: 100%;
    padding: 0.5rem 0.8rem;
    border: none;
    background-color: var(--darkWhite);
    font-size: 1rem;

    @media only screen and (max-width: 650px) {
      order: -7;
    }
  }

  button {
    background-color: red;
    color: white;
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;

    @media only screen and (max-width: 650px) {
      order: 0;
      grid-column: 1/3;
      width: 100%;
    }
  }
`;

export const Items = styled.div`
  width: 100%;
`;

export const Components = styled.div`
  width: 100%;
  h3 {
    margin-bottom: 0.5rem;
    color: var(--black);

    @media only screen and (max-width: 650px) {
      text-align: center;
    }
  }

  &:nth-of-type(1) {
    @media only screen and (max-width: 650px) {
      order: -2;
      grid-column: 2/3;
      grid-row: 2/5;
    }
  }
  &:nth-of-type(2) {
    @media only screen and (max-width: 650px) {
      order: -3;
    }
  }
  &:nth-of-type(3) {
    @media only screen and (max-width: 650px) {
      order: -5;
    }
  }
  &:nth-of-type(4) {
    @media only screen and (max-width: 650px) {
      order: -4;
    }
  }
  &:nth-of-type(5) {
    @media only screen and (max-width: 650px) {
      order: -6;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  button {
    color: var(--black);
    opacity: 0.6;
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
  border: 2px solid var(--black);
  border-radius: 5px;

  @media only screen and (max-width: 650px) {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

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

  @media only screen and (max-width: 650px) {
    justify-content: center;
  }

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

  @media only screen and (max-width: 650px) {
    justify-content: center;
  }

  input {
    width: 15px;
    height: 15px;
  }
`;

export const Price = styled.div`
  width: 80%;

  @media only screen and (max-width: 650px) {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 80px 140px auto 230px;
  gap: 1rem;
  align-items: center;
  color: var(--black);

  @media only screen and (max-width: 940px) {
    grid-template-columns: 80px auto;
    align-items: left;
  }

  hr,
  p {
    @media only screen and (max-width: 940px) {
      display: none;
    }
  }
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

  @media only screen and (max-width: 940px) {
    justify-content: flex-start;
  }

  select {
    color: var(--black);
    padding: 0.2rem 1rem;
    border: none;
    background-color: transparent;

    option {
      color: black;
    }
  }
`;
