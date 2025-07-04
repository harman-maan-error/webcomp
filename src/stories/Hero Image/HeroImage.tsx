import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
  src: string;
  alt: string;
  height?: string;
  disabled?: boolean;
}

const Hero = styled.div<{ $disabled: boolean; $height: string; $src: string }>`
  width: 80%;
  height: ${props => props.$height};
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.$disabled ? 0.6 : 1};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
  transition: opacity 0.7s ease;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height = '250px',
  disabled = false
}) => (
  <Hero
    role="img"
    aria-label={alt}
    $disabled={disabled}
    $height={height}
    $src={src}
  />
);
