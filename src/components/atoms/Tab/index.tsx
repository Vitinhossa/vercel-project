import { CustomTabTwo } from './style';

interface ITab {
  textColor?: string;
  backgroundColor?: string;
  tabWidth?: string;
  text: string;
  isActive?: boolean;
  type?: number;
  tabClick?: () => any;
}

export default function Tab({
  textColor,
  backgroundColor,
  tabWidth,
  text,
  isActive = false,
  tabClick,
}: ITab) {
  return (
    <CustomTabTwo
      onClick={tabClick}
      isActive={isActive}
      fontColor={textColor}
      bgColor={backgroundColor}
      width={tabWidth}
    >
      {text}
    </CustomTabTwo>
  );
}
