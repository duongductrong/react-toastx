import React, { FC } from 'react';
import { Toast } from '../Toast/Toast';

export interface ToastIconProps {
  type?: Toast.Type;
  filled?: Boolean
}

const ToastIcon: FC<ToastIconProps> = ({ type, filled }) => {
  const SuccessIcon = () => (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.25 9V8.325C17.25 7.875 16.95 7.575 16.5 7.575C16.05 7.575 15.75 7.875 15.75 8.325V9C15.75 12.75 12.75 15.75 9 15.75C5.25 15.75 2.25 12.75 2.25 9C2.25 5.25 5.25 2.25 9 2.25C9.975 2.25 10.875 2.475 11.775 2.85C12.15 3 12.6 2.85 12.75 2.475C12.9 2.1 12.75 1.65 12.375 1.5C11.325 0.975 10.125 0.75 9 0.75C4.425 0.75 0.75 4.425 0.75 9C0.75 13.575 4.425 17.25 9 17.25C13.575 17.25 17.25 13.575 17.25 9ZM16.725 1.725C17.025 1.425 17.475 1.425 17.775 1.725C18.075 2.025 18.075 2.475 17.775 2.775L9.525 11.025C9.375 11.175 9.15 11.25 9 11.25C8.85 11.25 8.625 11.175 8.475 11.025L6.225 8.775C5.925 8.475 5.925 8.025 6.225 7.725C6.525 7.425 6.975 7.425 7.275 7.725L9 9.45L16.725 1.725Z'
        fill={filled ? 'var(--toast-yoyogen-white)' : 'var(--toast-yoyogen-success)'}
      />
    </svg>
  );

  const ErrorIcon = () => (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 0.75C4.425 0.75 0.75 4.425 0.75 9C0.75 13.575 4.425 17.25 9 17.25C13.575 17.25 17.25 13.575 17.25 9C17.25 4.425 13.575 0.75 9 0.75ZM9 15.75C5.25 15.75 2.25 12.75 2.25 9C2.25 5.25 5.25 2.25 9 2.25C12.75 2.25 15.75 5.25 15.75 9C15.75 12.75 12.75 15.75 9 15.75ZM10.05 9L11.775 7.275C12.075 6.975 12.075 6.525 11.775 6.225C11.475 5.925 11.025 5.925 10.725 6.225L9 7.95L7.275 6.225C6.975 5.925 6.525 5.925 6.225 6.225C5.925 6.525 5.925 6.975 6.225 7.275L7.95 9L6.225 10.725C5.925 11.025 5.925 11.475 6.225 11.775C6.375 11.925 6.525 12 6.75 12C6.975 12 7.125 11.925 7.275 11.775L9 10.05L10.725 11.775C10.875 11.925 11.025 12 11.25 12C11.475 12 11.625 11.925 11.775 11.775C12.075 11.475 12.075 11.025 11.775 10.725L10.05 9Z'
        fill={filled ? 'var(--toast-yoyogen-white)' : 'var(--toast-yoyogen-error)'}
      />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      width='18'
      height='17'
      viewBox='0 0 18 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.75 8.68091C0.75 4.10591 4.425 0.430908 9 0.430908C13.575 0.430908 17.25 4.10591 17.25 8.68091C17.25 13.2559 13.575 16.9309 9 16.9309C4.425 16.9309 0.75 13.2559 0.75 8.68091ZM2.25 8.68091C2.25 12.4309 5.25 15.4309 9 15.4309C12.75 15.4309 15.75 12.4309 15.75 8.68091C15.75 4.93091 12.75 1.93091 9 1.93091C5.25 1.93091 2.25 4.93091 2.25 8.68091ZM9.75 8.68091V11.6809C9.75 12.1309 9.45 12.4309 9 12.4309C8.55 12.4309 8.25 12.1309 8.25 11.6809V8.68091C8.25 8.23091 8.55 7.93091 9 7.93091C9.45 7.93091 9.75 8.23091 9.75 8.68091ZM9.75 5.68091C9.75 5.45591 9.675 5.30591 9.525 5.15591C9.375 5.00591 9.075 4.93091 8.85 4.93091C8.80687 4.97404 8.78854 4.99236 8.76649 5.00015C8.7502 5.00591 8.73187 5.00591 8.7 5.00591C8.6625 5.00591 8.64375 5.02466 8.625 5.04341C8.60625 5.06216 8.5875 5.08091 8.55 5.08091L8.475 5.15591C8.325 5.30591 8.25 5.45591 8.25 5.68091C8.25 5.90591 8.325 6.05591 8.475 6.20591C8.475 6.20591 8.475 6.28091 8.55 6.28091C8.5875 6.28091 8.60625 6.29966 8.625 6.31841C8.64375 6.33716 8.6625 6.35591 8.7 6.35591C8.74313 6.39904 8.76146 6.41736 8.78351 6.42515C8.7998 6.43091 8.81813 6.43091 8.85 6.43091H9C9.225 6.43091 9.375 6.35591 9.525 6.20591C9.675 6.05591 9.75 5.90591 9.75 5.68091Z'
        fill={filled ? 'var(--toast-yoyogen-white)' : 'var(--toast-yoyogen-warning)'}
      />
    </svg>
  );

  return type === 'success' ? (
    <SuccessIcon />
  ) : type === 'error' ? (
    <ErrorIcon />
  ) : type === 'warning' ? (
    <InfoIcon />
  ) : null;
};

ToastIcon.defaultProps = {
  type: 'dark'
};

export default ToastIcon;
