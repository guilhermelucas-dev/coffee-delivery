import { DescriptiveSessionTitleBox } from "./styles";

interface DescriptiveSessionTitleProps {
  title: string,
  subtitle: string,
  icon?: React.ComponentType<{ size: number; color: string }>,
  sizeIcon: number,
  colorIcon: string
}

export function DescriptiveSessionTitle({ title, subtitle, icon: Icon, sizeIcon, colorIcon }: DescriptiveSessionTitleProps) {
  return (
    <DescriptiveSessionTitleBox>
      {Icon && <Icon size={sizeIcon} color={colorIcon} />}
      <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
      </div>
    </DescriptiveSessionTitleBox>
  );
}
