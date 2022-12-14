import styled from 'styled-components';

export const Container = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1rem 2rem;
  width: 100%;

  h2 {
    color: var(--black);
  }
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--black);

  &:last-of-type {
    margin-top: 0.8rem;
  }

  &:first-of-type {
    margin-top: 0.5rem;
  }
`;

export const Section = styled.div`
  width: 100%;
  margin-top: 1rem;

  p {
    margin-bottom: 0.5rem;
    opacity: 0.5;
    color: var(--black);
  }

  & input.name {
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    outline: none;
    padding: 0.3rem 0.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  } ;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  @media only screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  }

  & > * {
    width: 70px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    outline: none;
    padding: 0.3rem 0.5rem;

    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }

  &.card > *:not(:last-child) {
    -webkit-text-security: disc;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: var(--black);
    background-color: var(--white);
    border-radius: 10px;
    padding: 2rem;
    gap: 1rem;

    img {
      width: 100px;
    }

    a {
      background-color: var(--primaryColor);
      color: var(--white);
      padding: 0.3rem 0.5rem;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.1rem;
      text-decoration: none;
    }
  }
`;
