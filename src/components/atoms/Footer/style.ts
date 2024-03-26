import { colors } from "@/utils/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 62px;
  background-color: ${colors.branco};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 9991;

  position: absolute;
  bottom: 0;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.11);
`;
