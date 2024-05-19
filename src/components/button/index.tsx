import React from 'react';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = {
    fontFamily: `sans-serif`,
    fontWeight: `medium`,
    padding: `0.5rem 1rem`,
    border: `none`,
    borderRadius: `0.25rem`,
    cursor: `pointer`,
    transition: `background-color 0.3s`,
  };

  const primaryStyle = {
    backgroundColor: `#8511b4`,
    color: `#ffffff`,
    border: `1px solid #8511b4`,
  };

  const normalStyle = {
    backgroundColor: `#ffffff`,
    color: `#8511b4`,
  };

  const buttonStyle = primary ? { ...baseStyle, ...primaryStyle } : { ...baseStyle, ...normalStyle };

  return (
    <button type="button" style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
