import React from 'react';
import { withToastProps, withToast } from 'react-toastx';
import Button from './components/Button/Button';

/**
 * You can extends multiple interface for your custom props
 */
export interface SomeComponentProps extends withToastProps {}

class SomeComponentUseClass extends React.Component<SomeComponentProps> {
  render(): React.ReactNode | React.ReactElement {
    const { toast } = this.props;

    return (
      <div>
        <h1 style={{ marginLeft: '1rem' }}>In Class Component</h1>

        <Button
          style={{ margin: '1rem' }}
          onClick={() =>
            toast?.success(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              { closeTimeout: 3000 }
            )
          }
        >
          Toast success
        </Button>

        <Button
          style={{ margin: '1rem' }}
          onClick={() =>
            toast?.warning(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              { closeTimeout: 3000 }
            )
          }
        >
          Toast warning
        </Button>

        <Button
          style={{ margin: '1rem' }}
          onClick={() =>
            toast?.error(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              { closeTimeout: 3000 }
            )
          }
        >
          Toast error
        </Button>
      </div>
    );
  }
}

export default withToast(SomeComponentUseClass);
