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
  }

  svg {
    font-size: 1.5rem;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--primaryColor);
    text-align: center;
    line-height: 25px;
    color: white;
    font-size: 0.8rem;
    position: absolute;
    top: -8px;
    right: -17px;
  }
`;
