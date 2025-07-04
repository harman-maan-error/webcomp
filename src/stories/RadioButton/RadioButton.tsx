import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  label: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

const StyledRButton = styled.label<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  font-size: 22px;
  font-family: sans-serif;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked,
  disabled = false,
  onChange
}) => (
  <StyledRButton $disabled={disabled}>
    <StyledInput
      type="radio"
      name={name}
      defaultChecked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {label}
  </StyledRButton>
);
