/* eslint-disable react-hooks/exhaustive-deps */
import { fontSizes } from '@/utils/fonts';
import React, { useState, useEffect } from 'react';
import {
  PinInputContainer,
  Input,
  CustomPinInput,
  PinContainer,
  IconContainer,
} from './style';

interface IPinCode {
  length?: number;
  inputType?: string;
  getValue: (e: any) => any;
  hasError?: boolean;
  hasEyeButton?: boolean;
}

export default function PinCode({
  length = 1,
  inputType = `text`,
  getValue,
  hasError = false,
  hasEyeButton = false,
}: // value = ``,
IPinCode) {
  const [fill, setFill] = useState(``);
  // const [isFilled, setIsFilled] = useState(false);
  const [containers, setContainers] = useState<any[]>([]);
  const [isFocus, setIsFocus] = useState(false);
  const [codeIsVisible, setCodeIsVisible] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [inputError, setInputError] = useState(false);

  function buildInputsContainer() {
    const elements:any = [];
    for (let i = 1; i <= length; i += 1) {
      if (i <= fill.length) {
        elements.push(
          <CustomPinInput
            key={i}
            isFilled
            inputInFocus={isFocus}
            isError={inputError}
          />,
        );
      } else {
        elements.push(
          <CustomPinInput
            key={i}
            isFilled={false}
            inputInFocus={isFocus}
            isError={inputError}
          />,
        );
      }
    }

    setContainers(elements);
  }

  useEffect(() => {
    buildInputsContainer();

    if (fill.length > 0) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  }, [fill, isFocus]);

  useEffect(() => {
    setInputError(hasError);
  }, [hasError]);

  useEffect(() => {
    setInputError(hasError);
    buildInputsContainer();
  }, []);

  const handleInputOnFocus = (isOnFocus: boolean) => {
    setIsFocus(isOnFocus);
  };

  const handleCodeIsVisible = () => {
    setCodeIsVisible(!codeIsVisible);
  };

  return (
    <PinInputContainer>
      <Input
        type={codeIsVisible ? 'text' : 'password'}
        // value={fill}
        onChange={(e) => {
          if (e.target.value.length <= 8) {
            setFill(e.target.value);
            getValue(e.target.value);
          }
        }}
        max={length}
        maxLength={length}
        codeIsVisible={codeIsVisible}
        hasContent={hasContent}
        onFocus={() => handleInputOnFocus(true)}
        onBlur={() => handleInputOnFocus(false)}
      />
      <PinContainer codeIsVisible={codeIsVisible}>{containers}</PinContainer>
      {hasEyeButton && (
        <IconContainer onClick={() => handleCodeIsVisible()}>
          <i
            className="icon-eye"
            style={{
              fontSize: fontSizes.xLarge20,
              lineHeight: `15px`,
            }}
          />
        </IconContainer>
      )}
      {/* se houver hasEyeButton mostrar o botão de olho, chamar action handleCodeIsVisible() */}
    </PinInputContainer>
  );
}
