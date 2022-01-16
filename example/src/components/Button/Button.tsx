import React, { FC, useEffect, useState } from 'react';
import './button.scss';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'className'> {
  /**
   * Props tagName is meaning all tag element in html
   */
  tagName?: keyof JSX.IntrinsicElements;
}

const Button: FC<ButtonProps> = ({
  tagName = 'button',
  children,
  ...props
}) => {
  const MyComponent = tagName;

  const [isOpenRipple, setIsOpenRipple] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });

  const onRipple = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { top, left }: { top: number; left: number } = (
      event.target as any
    ).getBoundingClientRect();

    setRipplePosition({ x: event.clientX - left, y: event.clientY - top });
    setIsOpenRipple(true);
  };

  useEffect(() => {
    if (isOpenRipple) {
      setTimeout(() => {
        // After 450ms, to close ripple
        setIsOpenRipple(false);
      }, 450);
    }
  }, [isOpenRipple]);

  return (
    <MyComponent className='button-ripple' {...props}>
      <span onClick={onRipple} className='button-ripple__context'></span>
      {isOpenRipple && (
        <span
          style={{ top: ripplePosition.y, left: ripplePosition.x }}
          className='button-ripple__circle'
        ></span>
      )}
      {children}
    </MyComponent>
  );
};

Button.defaultProps = {
  tagName: 'button'
};

export default Button;
