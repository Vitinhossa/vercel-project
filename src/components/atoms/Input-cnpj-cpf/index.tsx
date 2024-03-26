import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/fonts';
import {
  MarginBottom,
  InputMaskStyle,
  Label,
  InputContainer,
  IconContainer,
} from './style';

interface IInputCnpjCpf {
  value?: string;
  type?: string;
  onChange?: any;

  inputMargin?: string;
  inputHeight?: string;

  labelText?: string;
  labelColor?: string;
  labelMargin?: string;

  containerMargin?: string;

  iconName?: string;
  iconColor?: string;
  iconSize?: string;

  iconContainerColor?: string;
}

export default function InputCnpjCpf({
  onChange,
  type,
  inputMargin,
  inputHeight,
  labelText,
  labelColor,
  labelMargin,
  containerMargin,
  iconName,
  iconColor,
  iconSize,
  iconContainerColor,
}: IInputCnpjCpf) {
  return (
    <MarginBottom margin={containerMargin}>
      {labelText && (
        <Label fontColor={labelColor} margin={labelMargin}>
          {labelText}
        </Label>
      )}
      <InputContainer>
        <InputMaskStyle
          mask={type === `cpf` ? `999.999.999-99` : `99.999.999/9999-99`}
          placeholder={type === `cpf` ? `XXX.XXX.XXX-XX` : `XX.XXX.XXX/XXXX-XX`}
          onChange={onChange}
          className="InputMask"
          margin={inputMargin}
          height={inputHeight}
          hasIcon={!!iconName}
        />
        {iconName && (
          <IconContainer iconContainerColor={iconContainerColor}>
            <i
              className={iconName}
              style={{
                fontSize: iconSize || fontSizes.xSmall12,
                lineHeight: `10px`,
                color: iconColor || colors.branco,
              }}
            />
          </IconContainer>
        )}
      </InputContainer>
    </MarginBottom>
  );
}
