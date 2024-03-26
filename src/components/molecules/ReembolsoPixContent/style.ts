import { colors } from "@/utils/colors";
import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  color: ${colors.cinzaDark};
`;

export const Saldo = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: ${colors.cinzaLightDark};
  margin: 16px 0;
`;

export const InputDescription = styled.p`
  font-size: 12px;
  line-height: 140%;
  color: ${colors.cinzaLightDark};
  margin-top: 4px;
`;
