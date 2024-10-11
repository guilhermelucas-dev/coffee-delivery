import styled from "styled-components";

export const SuccessContent = styled.main`
  max-width: 144rem;
  margin: 0 auto;
  padding: 3.2rem 16rem;
  

  h1 {
    font-family: "Baloo 2";
    font-size: 3.2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 41.6px;
  }

  > p {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    margin-top: 4rem;
    width: 52.6rem;
    padding: 4rem;
    border-radius: 6px 36px;
    background-color: ${(props) => props.theme['background']};
    position: relative;
    }

    @property --angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }

    > div::after, div::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      z-index: -1;
      padding: .2rem;
      border-radius: 8px 38px;
      background-image: linear-gradient( var(--angle), ${(props) => props.theme['yellow-dark']} 0%, ${(props) => props.theme['purple']} 100%);
      animation: 3s spin linear infinite;
    }

    > div::before {
      filter: blur(0.5rem);
      opacity: 0.5;
    }

    @keyframes spin {
      from {
        --angle: 0deg; 
      }
      to {
        --angle: 360deg;
      }
    }
   
  }  
`;