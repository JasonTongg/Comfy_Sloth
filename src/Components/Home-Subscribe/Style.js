import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  background-color: white;
  padding-block: 15rem;

  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media only screen and (max-width: 400px) {
    text-align: center;
  }

  h2 {
    font-size: 2.1rem;

    @media only screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }

  p {
    line-height: 2rem;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 400px) {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  align-self: center;

  input {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 70%;
    border: 2px solid black;
    border-radius: 5px 0 0 5px;
  }

  button {
    height: 100%;
    padding: 0.5rem 1rem;
    letter-spacing: 2px;
    font-size: 1.1rem;
    color: black;
    background-color: var(--primaryColor);
    outline: none;
    border-radius: 0 5px 5px 0;
  }
`;
