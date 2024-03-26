import ReactCodeInput from 'react-code-input';
import { colors } from '@/utils/colors';

interface IInputCode {
  inputType: any;
  fields: number;
  onChange?: (e: any) => void;
}

export default function InputCode({ inputType, fields, onChange }: IInputCode) {
  const inputStyle = {
    fontFamily: `monospace`,
    margin: `10px`,
    height: `50px`,
    width: `10%`,
    borderRadius: `0px`,
    fontSize: `20px`,
    fontWeight: 700,
    lineHeight: `30px`,
    backgroundColor: `transparent`,
    color: colors.cinzaDark,
    padding: `0px`,
    border: `0px solid ${colors.cinzaLightMedium}`,
    borderBottom: `2px solid ${colors.cinzaLightMedium}`,
    outline: `none`,
    textAlign: `center`
  };

  return (
    <ReactCodeInput
      type={inputType}
      fields={fields}
      name="teste"
      inputMode="latin"
      inputStyle={inputStyle}
      onChange={onChange}

    />
  );
}
