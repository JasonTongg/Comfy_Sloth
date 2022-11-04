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
    }
  }
`;
