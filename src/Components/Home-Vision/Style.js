import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--secondaryColor);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h2 {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.8rem;
  width: 100%;
  transform: translateY(100px);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background-color: var(--primaryColor);
  text-align: center;
  gap: 1rem;
  border-radius: 5px;

  h3 {
    font-size: 1.5rem;
  }

  p {
    line-height: 1.7rem;
  }

  div {
    width: 60px;
    height: 60px;
    background-color: var(--secondaryColor);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      font-size: 2.2rem;
    }
  }
`;
