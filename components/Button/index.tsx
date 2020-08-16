import React from 'react';
import styled, { css } from 'styled-components';
import Flex from '../Flex';

interface ButtonProps {
  kind: 'primary' | 'secondary';
  size?: 'large' | 'small';
  onClick?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  margin?: string;
  isLoading?: boolean;
  padding?: string;
  blur?: boolean;
  iconFill?: string;
  buttonIcon?: any;
  iconWidth?: number;
  iconHeight?: number;
  iconBgOnHover?: string;
  iconMargin?: string;
  borderRadius?: string;
  width?: string;
  textAlign?: string;
}

const getButtonKind = ({ isLoading, ...props }: Partial<ButtonProps>) => {
  switch (props.kind) {
    case 'primary':
      return css`
        background-color: ${(props) => props.theme.color.primaryColor100};
        color: ${(props) => props.theme.color.light2};
        border-radius: 4px;
        box-shadow: ${(props) => props.theme.shadow.elevation03}
          ${(props) => props.theme.color.primaryColor100};
      `;

    case 'secondary':
      return css`
        color: rgba(0, 0, 0, 0.3);
        background-color: transparent;
        font-size: 14px !important;
        font-weight: 600;
        border-radius: 4px;
      `;
  }
};

const getSize = (props: Partial<ButtonProps>) => {
  switch (props.size) {
    case 'large':
      return css`
        padding: 12px 42px;
      `;
    case 'small':
      return css`
        padding: 10px 15px;
      `;
    default:
      return ``;
  }
};

const ButtonStyled = styled.button<ButtonProps>`
  box-sizing: border-box;
  text-align: ${(props) => (props.textAlign ? props.textAlign : `center`)};
  border: none;
  outline: none;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
  line-height: 1.2;
  background-color: transparent;
 
  ${getButtonKind}
  ${getSize}
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => (props.width ? props.width : `100%`)};

  &:focus {
    outline: none;
  }
`;

const Button: React.SFC<ButtonProps> = ({
  children,
  disabled,
  isLoading,
  buttonIcon,
  iconWidth,
  iconMargin,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      disabled={isLoading ? true : disabled}
      isLoading={isLoading}
    >
      <Flex justifyContent="center">{children}</Flex>
    </ButtonStyled>
  );
};

export default Button;
