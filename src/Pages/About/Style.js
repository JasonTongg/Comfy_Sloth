import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 4rem;
  justify-items: center;
  background-color: var(--white);

  @media only screen and (max-width: 450px) {
    padding: 1.5rem;
  }

  @media only screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: var(--black);

  h2 {
    font-size: 2.5rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    width: 87%;
    opacity: 0.5;
    text-align: justify;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }

    @media only screen and (max-width: 1000px) {
      font-size: 0.9rem;
      line-height: 1.6rem;
    }
  }
`;

export const Line = styled.div`
  width: 100px;
  height: 5px;
  background-color: var(--primaryColor);
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;
