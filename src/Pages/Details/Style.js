import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  button {
    color: var(--darkWhite);
    background: var(--primaryColor);
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 5px;
    margin-top: 4rem;
    cursor: pointer;
  }
`;

export const Grid = styled.div`
  padding-block: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  width: 100%;
  gap: 3.5rem;
`;

export const Images = styled.div`
  width: 100%;

  & .active {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;

  h3 {
    font-size: 3rem;
    text-transform: capitalize;
  }

  p:first-of-type {
    color: var(--primaryColor);
    font-size: 1.5rem;
    font-weight: bold;
  }

  p:last-of-type {
    line-height: 1.8rem;
  }
`;

export const Image = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  & > * {
    width: 100px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;

    &.activeChild {
      border: 2px solid var(--primaryColor);
    }
  }
`;

export const Star = styled.div`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    color: #ffb900;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 40px 40px 40px;

  & > * {
    font-size: 1rem;

    &:nth-of-type(even) {
      font-weight: normal;
      text-transform: capitalize;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Colors = styled.div`
  display: grid;
  grid-template-columns: 100px 150px;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  & > * {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    opacity: 0.5;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    &.activeColor {
      opacity: 1;
    }
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bolder;

  svg {
    font-size: 1rem;
    cursor: pointer;
    font-weight: bolder;
  }
`;
