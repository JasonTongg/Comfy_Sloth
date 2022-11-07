import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  padding-block: 2rem;
  gap: 4rem;
  background-color: var(--white);
  width: 100%;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;

  h2 {
    font-size: 3rem;
    margin: 0;
    line-height: 3rem;
    color: var(--black);

    @media only screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 2.7rem;
    opacity: 0.6;
    color: var(--black);

    @media only screen and (max-width: 400px) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  a {
    text-decoration: none;
    padding: 0.8rem 1.7rem;
    font-size: 1.1rem;
    color: var(--white);
    background-color: var(--primaryColor);
    border-radius: 5px;
  }
`;
