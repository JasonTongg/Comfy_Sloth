import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  cursor: pointer;

  h3 {
    font-weight: normal;
    font-size: 1.5rem;
    color: var(--black);
  }

  svg {
    font-size: 1.5rem;
    color: var(--black);
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--primaryColor);
    text-align: center;
    line-height: 25px;
    color: var(--white);
    font-size: 0.8rem;
    position: absolute;
    top: -8px;
    right: -17px;
  }
`;

export const Mode = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-out;

  p {
    transform: translateY(-2px);
  }
`;

export const Big = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
