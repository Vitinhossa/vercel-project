import { useState } from 'react';
import {
  Content,
  Select,
  DisplayValue,
  Options,
  Option,
  IconContainer,
} from './style';

interface IOption {
  id: number;
  title: string;
}

interface IFilledSelect {
  options?: Array<IOption>;
  placeholder?: string;
  width?: string;
  height?: string;
  getSelectedValue: (e: any) => void;
  style?: any;
}

export default function FilledSelect({
  options,
  placeholder,
  width,
  height,
  getSelectedValue,
  style
}: IFilledSelect) {
  const [selectedValue, setSelectedValue] = useState<IOption>();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectValue = (option: any) => {
    setSelectedValue(option);
    setIsOpen(false);
    getSelectedValue(option);
  };

  return (
    <Content width={width}>
      <Select onClick={() => setIsOpen(!isOpen)} height={height} style={style}>
        <DisplayValue>
          {` `}
          {selectedValue?.title || placeholder}
          {` `}
        </DisplayValue>
        <IconContainer isOpen={isOpen}>
          <i className="icon-chevron-right" />
        </IconContainer>
      </Select>

      {isOpen && (
        <Options>
          {options?.map((option) => (
            <Option key={option.id} onClick={() => handleSelectValue(option)}>
              {option.title}
            </Option>
          ))}
        </Options>
      )}
    </Content>
  );
}
