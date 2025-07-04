import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  content: string;
  disabled?: boolean;
  fontSize?: string;
  color?: string;
}

const StyledText = styled.p<{ $disabled: boolean; $fontSize: string; $color: string }>`
  font-family: sans-serif;
  font-size: ${props => props.$fontSize};
  color: ${props => props.$disabled ? '#999999' : props.$color};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'default'};
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  fontSize = '30px',
  color = 'black',
}) => {
  return (
    <StyledText $disabled={disabled} $fontSize={fontSize} $color={color}>
      {content}
    </StyledText>
  );
};
