import styled from "styled-components";

export const ProductBoxItem = styled.li`
  position: relative;
  background-color: ${(props) => props.theme['base-card']};
  width: 25.6rem;
  height: 31rem;
  padding: 11rem 2rem 2rem 2rem;
  border-radius: 6px 36px;
  text-align: center;

  img {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translate(-50%);
  }

  h3 {
    margin-top: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > p {
    font-size: 1.4rem;
    margin-top: 0.8rem;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const TagsCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;

  > span {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: .4rem .8rem;
    border-radius: 100px;
  }
`;

export const Order = styled.div`
    display: flex;
    margin-top: 3.6rem;
    justify-content: space-between;
    align-items: center;

    p {
     font-size: 1.4rem;

     span {
      display: inline-block;
      margin-left: 0.3rem;
      font-family: "Baloo 2", system-ui;
      font-size: 2.4rem;
      font-weight: 800;
     }
    }
`;

export const CountProduct = styled.div`
  display: flex;
  border-radius: .6rem;
  align-items: center;
  gap: .8rem;
`;

export const ButtonCart = styled.button<{$itemAdded?: boolean}>`
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${({ theme, $itemAdded }) =>
    $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  line-height: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({theme, $itemAdded }) => 
      $itemAdded ? theme['yellow'] : theme['purple']};
  }
`;

