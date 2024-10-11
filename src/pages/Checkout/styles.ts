import styled from "styled-components";

export const CheckoutContent = styled.main`
  max-width: 144rem;
  margin: 0 auto;
  padding: 3.2rem 16rem;
  display: grid;
  
  column-gap: 3.2rem;

  grid-template-columns: 2fr 44.8rem;
  padding: 3.2rem 16rem;

  font-family: "Baloo 2";
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  section {
    background-color: ${(props) => props.theme['base-card']};
    padding: 4rem;
    border-radius: .6rem;

    > div {
      display: flex;
      gap: .8rem;
      align-items: start;

      h2 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-size: 1.4rem;
        line-height: 130%;
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  fieldset {
    border: none;
    background-color: ${(props) => props.theme['base-card']};
    padding: 4rem;
    border-radius: .6rem;
  }
`;

export const FieldsetLegend = styled.div`
  display: flex;
  gap: .8rem;
  align-items: start;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1.4rem;
    line-height: 130%;
  }
`

export const FormAddress = styled.div`
  margin-top: 3.2rem;

  display: grid;
  column-gap: 1.2rem;
  row-gap: 1.6rem;
  grid-template-columns: 35% 1fr 12%;

  > div {
    position: relative;
  }

  div:nth-child(2) {
    grid-column: 1 / 4;
  }

  div:nth-child(4) {
    grid-column: 2 / 4;
  }

  input:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
export const Options = styled.div`
  margin-top: 3.2rem;
  display: flex;
  gap: 1.2rem;

  input {
    display: none;
  }

  > label {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-button']};
    border: 1px solid transparent;
    border-radius: .6rem;
    cursor: pointer;
  }

  label:hover {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }

  input:checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }
`;

export const OrderListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
  padding: 4rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: .6rem 4.4rem;

  > div {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
  }

  > div:nth-child(2) {
    margin-top: 2.4rem;
  }

  > div:nth-child(4) {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > button {
    margin-top: 1.2rem;
    padding: 1.2rem .8rem;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    border: none;
    border-radius: .6rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }

`;

export const OrderList = styled.ul`
  list-style: none;

  li {
    padding: 3.2rem .4rem; 
  }

  li:first-child {
    padding-top: .8rem;
  }

`;

export const ListItem = styled.li`
  display: flex;
  gap: 2rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']}; 

  img {
    height: 100%;
    width: 6.8rem;
  }

  h3 {
      font-size: 1.6rem;
      line-height: 20.8px;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
`;

export const ActionItem = styled.div`
  margin-top: 0.8rem;
  display: flex;
  gap: .8rem;

  > button {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.8rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      background-color: ${(props) => props.theme['base-button']};
      border: none;
      border-radius: .6rem;
      line-height: 0;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    }
`;

export const Stroke = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 2.4rem 0;
`;
