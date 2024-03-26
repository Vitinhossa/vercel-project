import { MarginBottom, InputMaskStyle, Label } from './style';

interface IInputDate {
  value?: string;
  type?: string;
  onChange?: any;
  beforeMaskedValueChange?: any;

  inputMargin?: string;
  inputHeight?: string;

  labelText?: string;
  labelColor?: string;
  labelMargin?: string;

  containerMargin?: string;

  isDate?: boolean;
  isTelephone?: boolean;
  isCep?: boolean;
  isCardNumber?: boolean;
  isValid?: boolean;
}

export default function InputDate({
  onChange,
  beforeMaskedValueChange,
  inputMargin,
  inputHeight,
  labelText,
  labelColor,
  labelMargin,
  containerMargin,
  isDate,
  isTelephone,
  value,
  isCep,
  isCardNumber,
  isValid,
}: IInputDate) {
  return (
    <MarginBottom margin={containerMargin}>
      {labelText && (
        <Label fontColor={labelColor} margin={labelMargin}>
          {labelText}
        </Label>
      )}
      {isDate && (
        <InputMaskStyle
          mask="99/99/9999"
          placeholder="XX/XX/XXXX"
          onChange={onChange}
          className="InputMask"
          margin={inputMargin}
          height={inputHeight}
        />
      )}
      {isTelephone && (
        <InputMaskStyle
          mask="(99)99999-9999"
          placeholder="(XX)XXXXX-XXXX"
          onChange={onChange}
          value={value}
          className="InputMask"
          margin={inputMargin}
          height={inputHeight}
        />
      )}
      {isCep && (
        <InputMaskStyle
          mask="99999-999"
          placeholder="XXXXX-XXX"
          onChange={onChange}
          //beforeMaskedValueChange={beforeMaskedValueChange}
          className="InputMask"
          margin={inputMargin}
          height={inputHeight}
        />
      )}
      {isCardNumber && (
        <InputMaskStyle
          mask="9999 9999 9999 9999"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={onChange}
          className="InputMask"
          margin={inputMargin}
          height={inputHeight}
        />
      )}
      {isValid && (
        <InputMaskStyle
          mask="99/99"
          placeholder="XX/XX"
          onChange={onChange}
          className="InputMask"
          margin={inputMargin}
          height={inputHeight}
        />
      )}
    </MarginBottom>
  );
}
