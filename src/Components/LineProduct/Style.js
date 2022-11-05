import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-block: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 2rem;
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    h3 {
      font-size: 1.8rem;
      text-transform: capitalize;
      cursor: pointer;
    }

    p:first-of-type {
      color: var(--primaryColor);
      margin-top: 1rem;
    }

    p:last-of-type {
      margin-block: 1rem;
    }

    button {
      font-size: 0.6rem;
      background-color: var(--primaryColor);
      color: white;
      padding: 0.3rem 0.5rem;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0);
  width: calc((100% / 3) - 10px);
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s linear;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: transparent;
  border-radius: 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: white;
  }
`;
