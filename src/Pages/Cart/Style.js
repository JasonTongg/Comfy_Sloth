import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding-block: 2rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);

  & .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    justify-self: flex-start;

    img {
      width: 100px;
      height: 80px;
      object-fit: cover;
    }

    & .itemInfo {
      text-transform: capitalize;
      font-size: 1rem;

      p:first-of-type {
        font-weight: bold;
        color: black;
      }
      p:last-of-type {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;

        span {
          width: 10px;
          height: 10px;
          border-radius: 3px;
          margin-top: 3px;
        }
      }
    }
  }

  & .price {
    color: var(--primaryColor);
  }

  & .order {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weigth: bolder;
    color: rgb(0, 0, 0, 0.8);

    svg {
      cursor: pointer;
    }
  }

  & .Total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    div {
      background-color: red;
      border-radius: 5px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        color: white;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-block: 4rem;
  gap: 1rem;

  h2 {
    font-size: 2rem;
  }

  button {
    border: none;
    padding: 0.3rem 0.5rem;
    background-color: var(--primaryColor);
    color: white;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 2rem;

  & > * {
    border: none;
    padding: 0.5rem 0.8rem;
    color: white;
    font-weight: 300;
    letter-spacing: 1px;
    background-color: var(--primaryColor);
    font-size: 0.9rem;
    border-radius: 5px;
    cursor: pointer;
  }

  & > *:last-child {
    background-color: black;
  }
`;

export const TotalPrice = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 400px;
  align-self: flex-end;
  border-radius: 10px;

  & > *:last-child {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export const TotalGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 2rem;
  font-size: 1.1rem;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CheckoutButton = styled.button`
  align-self: flex-end;
  border: none;
  background-color: var(--primaryColor);
  color: white;
  padding: 0.3rem 0.5rem;
  width: 400px;
  margin-block: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  border-radius: 5px;
`;
