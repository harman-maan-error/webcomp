import React from 'react';
import styled from 'styled-components';

export interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  disabled?: boolean;
}

const StyledImg = styled.img<{ $disabled: boolean }>`
  width: 100%;
  max-width: ${props => props.width || '100%'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
  transition: opacity 0.4s ease;
  display: block;
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width = '100%', disabled = false }) => (
  <StyledImg src={src} alt={alt} width={width} $disabled={disabled} />
);
