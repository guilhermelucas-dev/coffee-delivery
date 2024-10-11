import styled from "styled-components";

export const INFO_COLORS = {
  black: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
  orange: 'yellow-dark',
} as const

interface InfoBoxProps {
  $infoColors: keyof typeof INFO_COLORS
}

export const InfoBox = styled.div<InfoBoxProps>`
  display: flex;
  align-items: center;
  gap: .8rem;

  p {
    line-height: 20.8px;
  }

  span {
    width: 3.2rem;
    height: 3.2rem;
    padding: .8rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[INFO_COLORS[props.$infoColors]]};
    line-height: 0;
  }
`