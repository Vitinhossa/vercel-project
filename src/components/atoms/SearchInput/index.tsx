import { InputContainer, Input, IconContainer } from './style';
import SearchIcon from '../../../assets/svg/search';

interface ISearchInput {
  width?: string;
  height?: string;
  bgColor?: string;
  fontSize?: string;
  margin?: string;
  hasAnim?: boolean;
  radius?: string;
  borderBottom?: boolean;
  placeholderText?: string;
  placeholderColor?: string;
}
export default function SearchInput({
  width,
  height,
  bgColor,
  fontSize,
  placeholderColor,
  placeholderText,
  margin,
  borderBottom,
  radius,
}: ISearchInput) {
  return (
    <InputContainer width={width} height={height} margin={margin} hasAnim>
      <Input
        bgColor={bgColor}
        placeholder={placeholderText}
        placeholderColor={placeholderColor}
        fontSize={fontSize}
        borderBottom={borderBottom}
        radius={radius}
      />
      <IconContainer>{SearchIcon()}</IconContainer>
    </InputContainer>
  );
}
