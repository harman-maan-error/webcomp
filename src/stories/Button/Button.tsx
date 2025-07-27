import React from 'react';
import styled from 'styled-components';

    export interface ButtonValues {

      
  label: string;
  disabled?: boolean;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const ModifiedButton = styled.button<{
  $disabled: boolean;
  $bgColor?: string;
  $textColor?: string;
}>`
  font-family: sans-serif;
  font-size: 16px;
  padding: 12px 18px;
  border: none;
  border-radius: 10px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  background-color: ${props => props.$disabled ? '#cccccc' : props.$bgColor || '#1ea7fd'};
  color: ${props => props.$disabled ? '#666666' : props.$textColor || 'white'};
  opacity: ${props => props.$disabled ? 0.7 : 1};
  transition: all 0.2s;

  &:hover {
    opacity: ${props => props.$disabled ? 0.7 : 0.9};
  }
`;

export const Button: React.FC<ButtonValues> = ({
  label,
  disabled = false,
  bgColor,
  textColor,
  onClick,
}) => {
  return (
    <ModifiedButton
      $disabled={disabled}
      $bgColor={bgColor}
      $textColor={textColor}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </ModifiedButton>
  );
};