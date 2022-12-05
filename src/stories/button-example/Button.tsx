import React from 'react';
import './button.css';
import ButtonProps from './props/Button.props';
import { getDefaultProps }from './Button.actions'

export const Button = (buttonProps: ButtonProps) => {
  const {className, backgroundColor, label, ...props} = getDefaultProps(buttonProps)
  return (
    <button
      type="button"
      className={className}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
