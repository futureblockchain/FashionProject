import React, { FC, ButtonHTMLAttributes } from 'react';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  Base = 'base',
  Google = 'google-sign-in',
  Inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.Base) => {
  const buttonMap = {
    [BUTTON_TYPE_CLASSES.Base]: BaseButton,
    [BUTTON_TYPE_CLASSES.Google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.Inverted]: InvertedButton,
  };

  return buttonMap[buttonType];
};

type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;