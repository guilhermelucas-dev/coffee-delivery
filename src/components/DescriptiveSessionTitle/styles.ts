import styled from "styled-components";

export const DescriptiveSessionTitleBox = styled.div`
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
`;