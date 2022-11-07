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

  div:nth-of-type(2) {
    @media only screen and (max-width: 830px) {
      display: none;
    }
  }

  .sidebar {
    display: none;
    font-size: 2rem;
    color: var(--primaryColor);
    cursor: pointer;

    @media only screen and (max-width: 830px) {
      display: block;
    }
  }
`;

export const Pages = styled.div`
  display: flex;
  gap: 2.3rem;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 830px) {
    display: none;
  }

  & > * {
    text-decoration: none;
    color: var(--black);
    font-size: 1.1rem;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  max-width: 100vw;
  background-color: var(--white);
  z-index: 10;
  border: 2px solid var(--primaryColor);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  transition: all 0.5s ease-out;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    svg {
      font-size: 2.5rem;
      color: var(--primaryColor);
    }
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-size: 1.2rem;
    padding-inline: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  div:nth-of-type(2) {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;

    & > * {
      margin: 0;
    }
  }

  &.show {
    transform: translateX(0);
  }

  &.hide {
    transform: translateX(400px);
  }
`;
