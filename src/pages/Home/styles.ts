import styled from "styled-components";
import backgroundImage from "../../assets/background-hero.png";

export const ContentHome = styled.div`

    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const SectionHero = styled.section`
  max-width: 144rem;
  margin: 0 auto;
  padding: 3.2rem 16rem;

  padding-top: 9.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.6rem;

  h1 {
      font-family: "Baloo 2", sans-serif;
      font-size: 4.8rem;
      font-weight: 800;
      line-height: 62.4px;
      color: ${(props) => props.theme['base-title']};
    }

    h2 {
      margin-top: 1.6rem;
      font-size: 2rem;
      font-weight: 400;
      line-height: 26px;
      color: ${(props) => props.theme['base-subtitle']};
    }
`;

export const HeroImage = styled.div`
  width: 65rem;
  img {
    width: 100%;
  }
`;

export const WrapperInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  margin-top: 6rem;
`;

export const SectionCoffees = styled.section`

  max-width: 144rem;
  margin: 0 auto;
  padding: 3.2rem 16rem;

  margin-top: 14rem;

  h2 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']}
  }
`;

export const GridCoffeesList = styled.ul`
  margin-top: 5.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 4rem;
  list-style: none;
`;