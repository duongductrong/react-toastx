import ToastProvider from './context/ToastProvider';
import withToast from './HOC/withToast';
import useToast from './hooks/useToast';
import { withToastProps } from './HOC/withToast';
import { useToastProps } from './hooks/useToast';

import './styles/app.scss';

export { ToastProvider, useToast, withToast, withToastProps, useToastProps };
