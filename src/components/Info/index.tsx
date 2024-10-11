import { ReactNode } from "react";
import { INFO_COLORS, InfoBox } from "./styled";

interface InfoDescriptionSucessProps {
  children: ReactNode,
  backgroundIconColor: keyof typeof INFO_COLORS
}

export function Info({ children, backgroundIconColor }: InfoDescriptionSucessProps) {
  return(
    <InfoBox $infoColors={backgroundIconColor}>
      {children}
    </InfoBox>
  );
}