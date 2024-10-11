import styled from "styled-components";

export const ProductAmountInputBox = styled.div`

  display: flex;
  align-items: center;
  gap: .4rem;
  height: 3.8rem;
  border-radius: .6rem;
  padding: .8rem;
  background-color: ${(props) => props.theme['base-button']};

  span {
    color: ${(props) => props.theme['base-title']};
    width: 2rem;
    text-align: center;
  }

  > button {
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme['purple']};
  line-height: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
}

`;

