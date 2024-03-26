import { ChangeEvent, CSSProperties } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  height: 28px;
  border: none;
  border-radius: 30px;
  padding: 4px 0 4px 10px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
`;

export const MicroSelect = ({
  style,
  options,
  onChange,
}: {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  style?: CSSProperties;
  options?: { value: string; text: string }[];
}) => (
  <StyledSelect style={style} onChange={onChange}>
    {options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </StyledSelect>
);
