import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 144rem;
  margin: 0 auto;
  padding: 3.2rem 16rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartAndAdreessContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`
export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  line-height: 130%;
`

export const Cart = styled(NavLink)`
  position: relative;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  line-height: 0;

  span {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    top: -1rem;
    right: -1rem;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};
    text-align: center;
    line-height: 2rem;
  }
`