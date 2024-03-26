import React from 'react';
import {
  CustomInput,
  CustomSecondInput,
  Label,
  InputContainer,
  Description,
  Icon,
  InputIcon,
  IconComp,
} from './style';

interface IInput {
  inputType?: string;
  inputFormat?: string;
  inputColor?: string;
  inputWidth?: string;
  inputPadding?: string;

  placeholder?: string;
  inputPlaceholderColor?: string;
  value?: string;
  onChange?: any;

  labelText?: string;
  labelColor?: string;
  labelMargin?: string;

  descriptionText?: string;
  descriptionColor?: string;
  descriptionPosition?: string;

  margin?: string;

  iconComp?: any;
  eyeIcon?: string;
  eyeIconAction?: () => any;
  eyeIconColor?: string;

  maxLength?: number;
  minLength?: number;

  leftText?: string;
  style?: React.CSSProperties;
  styleInput?: React.CSSProperties;
  beforeInput?: React.ReactNode;
  afterInput?: React.ReactNode;
}

export default function Input({
  inputType = `text`,
  inputFormat = `normal`,
  labelText,
  labelMargin,
  descriptionText,
  eyeIcon,
  iconComp,
  placeholder,
  inputColor,
  inputPlaceholderColor,
  labelColor,
  descriptionColor,
  descriptionPosition = `left`,
  inputWidth,
  value,
  onChange,
  eyeIconAction,
  eyeIconColor,
  margin,
  maxLength,
  minLength,
  inputPadding,
  style,
  beforeInput,
  styleInput,
  afterInput,
}: IInput) {
  switch (inputFormat) {
    case `normal`:
      return (
        <InputContainer style={style} width={inputWidth} margin={margin}>
          <CustomInput
            type={inputType}
            fontColor={inputColor}
            placeholderColor={inputPlaceholderColor}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            minLength={minLength}
            onChange={onChange}
            padding={inputPadding}
            style={styleInput}
          />
          {eyeIcon && (
            <Icon
              className={eyeIcon}
              onClick={eyeIconAction}
              color={eyeIconColor}
            />
          )}
          {iconComp && <IconComp>{iconComp()}</IconComp>}
        </InputContainer>
      );
    case `without-bg`:
      return (
        <InputContainer
          style={style}
          width={inputWidth}
          margin={margin}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {beforeInput}
          {/* {leftText && (
            <Paragraph fontWeight="400" fontSize="12px" lineHeight="16px">
              {leftText}
            </Paragraph>
          )} */}
          <CustomSecondInput
            type={inputType}
            fontColor={inputColor}
            placeholderColor={inputPlaceholderColor}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            minLength={minLength}
            onChange={onChange}
            padding={inputPadding}
            style={styleInput}
          />
          {afterInput}
        </InputContainer>
      );
    case `label`:
      return (
        <InputContainer width={inputWidth} margin={margin}>
          <Label labelMargin={labelMargin} fontColor={labelColor}>
            {` `}
            {labelText}
            {` `}
          </Label>
          <InputIcon>
            <CustomInput
              type={inputType}
              fontColor={inputColor}
              placeholderColor={inputPlaceholderColor}
              placeholder={placeholder}
              value={value}
              maxLength={maxLength}
              minLength={minLength}
              onChange={onChange}
              padding={inputPadding}
              style={styleInput}
            />
            {eyeIcon && (
              <Icon
                className={eyeIcon}
                onClick={eyeIconAction}
                color={eyeIconColor}
              />
            )}
          </InputIcon>
        </InputContainer>
      );
    case `label-description`:
      return (
        <InputContainer width={inputWidth} margin={margin}>
          <Label labelMargin={labelMargin} fontColor={labelColor}>
            {` `}
            {labelText}
            {` `}
          </Label>

          <InputIcon>
            <CustomInput
              type={inputType}
              fontColor={inputColor}
              placeholderColor={inputPlaceholderColor}
              placeholder={placeholder}
              value={value}
              maxLength={maxLength}
              minLength={minLength}
              onChange={onChange}
              padding={inputPadding}
              style={styleInput}
            />
            {eyeIcon && (
              <Icon
                className={eyeIcon}
                onClick={eyeIconAction}
                color={eyeIconColor}
              />
            )}
          </InputIcon>

          <Description
            textPosition={descriptionPosition}
            fontColor={descriptionColor}
          >
            {descriptionText}
          </Description>
        </InputContainer>
      );
    case `description`:
      return (
        <InputContainer width={inputWidth} margin={margin}>
          <InputIcon>
            <CustomInput
              type={inputType}
              fontColor={inputColor}
              placeholderColor={inputPlaceholderColor}
              placeholder={placeholder}
              value={value}
              maxLength={maxLength}
              minLength={minLength}
              onChange={onChange}
              padding={inputPadding}
              style={styleInput}
            />
            {eyeIcon && (
              <Icon
                className={eyeIcon}
                onClick={eyeIconAction}
                color={eyeIconColor}
              />
            )}
          </InputIcon>
          <Description
            textPosition={descriptionPosition}
            fontColor={descriptionColor}
          >
            {descriptionText}
          </Description>
        </InputContainer>
      );
    default:
      return (
        <InputContainer width={inputWidth} margin={margin}>
          <CustomInput
            type={inputType}
            fontColor={inputColor}
            placeholderColor={inputPlaceholderColor}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            padding={inputPadding}
            style={styleInput}
          />
          {eyeIcon && (
            <Icon
              className={eyeIcon}
              onClick={eyeIconAction}
              color={eyeIconColor}
            />
          )}
          {afterInput}
        </InputContainer>
      );
  }
}
