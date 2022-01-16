import React from 'react';
import { useToast } from '..';
import { useToastProps } from '../hooks/useToast';

// The interface for class component extends in props to use it
export interface withToastProps {
  toast?: useToastProps;
}

// Is a Higher Order Component
// To fixed for class component can use toast passing by props

function withToast(AppComponent: any) {
  return function ({
    children,
    ...props
  }: any): React.ReactElement {
    const toast = useToast();

    return (
      <AppComponent {...props} toast={toast}>
        {children}
      </AppComponent>
    );
  };
}

export default withToast;
