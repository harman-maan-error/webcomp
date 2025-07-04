import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Select = styled.select<{ $disabled: boolean }>`
  padding: 6px;
  font-size: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  border: 2px solid grey;
  border-radius: 6px;
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false, onChange }) => (
  <Select $disabled={disabled} disabled={disabled} onChange={(e) => onChange?.(e.target.value)}>
    {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
  </Select>
);
