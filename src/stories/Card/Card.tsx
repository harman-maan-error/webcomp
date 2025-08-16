import React from 'react';
import styled from 'styled-components';
import { CardValues } from './Card.types';

const ModifiedCard = styled.div<CardValues>`
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 22px;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor || '#fff'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
  transition: all 0.5s;

  &:hover {
    box-shadow: ${(props) => !props.disabled && '0 4px 8px rgba(0,0,0,0.2)'};
  }
`;

/**
 * Card component that displays content in a styled box.**/
export const Card: React.FC<CardValues> = ({
  children,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <ModifiedCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </ModifiedCard>
  );
};
