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
  }

  p {
    font-size: 1.4rem;
    line-height: 2.7rem;
    color: rgba(0, 0, 0, 0.6);
  }

  a {
    text-decoration: none;
    padding: 0.8rem 1.7rem;
    font-size: 1.1rem;
    color: #e3e3e3;
    background-color: var(--primaryColor);
    border-radius: 5px;
  }
`;
