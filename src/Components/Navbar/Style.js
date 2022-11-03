import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  gap: 1rem;
  background-color: var(--white);
  width: 100%;
  box-sizing: border-box;

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
