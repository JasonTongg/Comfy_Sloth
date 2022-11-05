import styled from 'styled-components';

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-block: 3rem;
  gap: 2.8rem;
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0);
  width: 100%;
  height: 250px;
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

export const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 1rem;

  & > *:first-child {
    justify-self: flex-start;
    cursor: pointer;
  }

  & > *:last-child {
    justify-self: flex-end;
    color: var(--primaryColor);
  }
`;
