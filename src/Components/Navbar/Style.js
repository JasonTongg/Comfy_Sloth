import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  max-width: 100%;
  gap: 1rem;

  img {
    width: 175px;
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  display: flex;
  gap: 2.3rem;
  align-items: center;
  justify-content: center;

  & > * {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.1rem;
  }
`;
