import React from 'react';
import Button from './components/Button/Button';
import { useToast } from 'react-toastx';

const App = () => {
  const toast = useToast();

  return (
    <>
      <h1 style={{ marginLeft: '1rem' }}>Functional Component </h1>
      <Button
        style={{ margin: '1rem' }}
        tagName='button'
        onClick={() =>
          toast.success(
            'Lorem ipsum is <b>placeholder</b> text em em ipsum is <b>placeholder</b> text is <b>placeholder</b> text',
            {
              closeTimeout: 6000
            }
          )
        }
      >
        Toast success
      </Button>
      <Button
        style={{ margin: '1rem' }}
        tagName='button'
        onClick={() =>
          toast.warning('Lorem ipsum is <b>placeholder</b> text', {
            closeTimeout: 3000
          })
        }
      >
        Toast warning
      </Button>
      <Button
        style={{ margin: '1rem' }}
        tagName='button'
        onClick={() =>
          toast.error('Lorem ipsum is <b>placeholder</b> text', {
            closeTimeout: 3000
          })
        }
      >
        Toast danger
      </Button>
      <Button
        style={{ margin: '1rem' }}
        tagName='button'
        onClick={() =>
          toast.success('Lorem ipsum is <b>placeholder</b> text', {
            closeTimeout: 3000,
            filled: true
          })
        }
      >
        Toast success filled
      </Button>
      <Button
        style={{ margin: '1rem' }}
        tagName='button'
        onClick={() =>
          toast.warning('Lorem ipsum is <b>placeholder</b> text', {
            closeTimeout: 3000,
            filled: true
          })
        }
      >
        Toast warning filled
      </Button>
      <Button
        style={{ margin: '1rem' }}
        tagName='button'
        onClick={() =>
          toast.error('Lorem ipsum is <b>placeholder</b> text', {
            closeTimeout: 3000,
            filled: true
          })
        }
      >
        Toast danger filled
      </Button>
    </>
  );
};

export default App;
