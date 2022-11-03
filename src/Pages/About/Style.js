import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 4rem;
  justify-items: center;

  img {
    width: 541px;
    height: 500px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  width: 100%;

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    width: 87%;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Line = styled.div`
  width: 100px;
  height: 5px;
  background-color: var(--primaryColor);
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;
