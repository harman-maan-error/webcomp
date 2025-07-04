import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  disabled?: boolean;
  textColor?: string;
}

const StyledLabel = styled.label<{ $disabled: boolean; $textColor?: string }>`
  font-family: sans-serif;
  font-size: 22px;
  border: 2px solid #ccc;
  padding : 8px 12px;
  color: ${props => props.$disabled ? '#888888' : props.$textColor || '#000'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false, textColor }) => {
  return <StyledLabel $disabled={disabled} $textColor={textColor}>{text}</StyledLabel>;
};
