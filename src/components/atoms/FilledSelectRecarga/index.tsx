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
  providerId?: number;
  name?: string;
  maxValue?: number;
  productName?: string;
}


interface IFilledSelect {
  options?: Array<IOption>;
  placeholder?: string;
  isOperadora?: boolean;
  isValores?: boolean;
  width?: string;
  height?: string;
  getSelectedValue: (e: any) => void;
}

export default function FilledSelectRecarga({
  options,
  placeholder,
  isOperadora = false,
  isValores = false,
  width,
  height,
  getSelectedValue,
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
      {isOperadora == true && (
        <>
        <Select onClick={() => setIsOpen(!isOpen)} height={height}>
        <DisplayValue>
          {` `}
          {selectedValue?.name || placeholder}
          {` `}
        </DisplayValue>
        <IconContainer isOpen={isOpen}>
          <i className="icon-chevron-right" />
        </IconContainer>
      </Select>

        {isOpen && (
          <Options>
            {options?.map((option) => (
              <Option key={option.providerId} onClick={() => handleSelectValue(option)}>
                {option.name}
              </Option>
            ))}
          </Options>
        )}
        </>
      )}
      {isValores == true && (
        <>
        <Select onClick={() => setIsOpen(!isOpen)} height={height}>
        <DisplayValue>
          {` `}
          {selectedValue?.productName || placeholder}
          {` `}
        </DisplayValue>
        <IconContainer isOpen={isOpen}>
          <i className="icon-chevron-right" />
        </IconContainer>
      </Select>

        {isOpen && (
          <Options>
            {options?.map((option) => (
              <Option key={option.maxValue} onClick={() => handleSelectValue(option)}>
                {option.productName}
              </Option>
            ))}
          </Options>
        )}
        </>
      )}
      
    </Content>
  );
}
