import { colors } from '@/utils/colors';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 20px;

  h2 {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    width: 335px;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 40px auto;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px;
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid #CBCBCB;
  cursor: pointer;
  transition: transform .3s;

  p {
    font-size: 16px;
    line-height: 140%;
    font-weight: bold;
    margin-left: 16px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Icon = styled.img``;

export const Section = styled.div``;

export const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.branco};
  padding: 100px 20px 40px 20px;

  h3 {
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-size: 12px;
    line-height: 140%;
    margin-top: 4px;
    color: ${colors.cinzaLightDark};
  }
`;

export const TextArea = styled.textarea`
  margin-top: 40px;
  width: 100%;
  height: 200px;
  font-size: 16px;
  line-height: 140%;
  border: none;
  border-bottom: 3px solid ${colors.cinzaLightMedium};
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none;

  &:focus {
    border-bottom: 3px solid ${colors.verdeDark};
  }
`;

export const SelectInputContainer = styled.div``;

export const SelectInputIcon = styled.i``;
