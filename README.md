# React Toastbar

> To provide the toast notification use react core

[![NPM](https://img.shields.io/npm/v/react-toastx.svg)](https://www.npmjs.com/package/react-toastx) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-toastx
```

## Demo

<img src="./src/assets/action-demo.gif" />

## Usage

### **Provider**

Remember to add ToastProvider to root app. <br/>
We need find a root component and assign Provider same below

```tsx
import { ToastProvider } from 'react-toastx'

// Remember to add css to root 
import 'react-toastx/dist/app.css';

// You can add here index.[tsx,jsx]
// Or any where can a root of your component
ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
);
```

### Use in Functional Component?

```tsx
import React from 'react';
import { useToast } from 'react-toastx';

// To use toast for Functional Component
// We can use it with hook "useToast"

const App = () => {
  const toast = useToast();

  return (
    <>
      <button onClick={() => toast.success("React totast bar", {closeTimeout: 3000})}>Toast success</button>

      <button onClick={() => toast.warning("React totast bar", {closeTimeout: 3000})}>Toast warning</button>

      <button onClick={() => toast.error("React totast bar", {closeTimeout: 3000})}>Toast danger</button>

      <button onClick={() => toast.success("React totast bar", {closeTimeout: 3000, filled: true})}>Toast success filled</button>

      <button onClick={() => toast.warning("React totast bar", {closeTimeout: 3000, filled: true})}>Toast warning filled</button>

      <button onClick={() => toast.error("React totast bar", {closeTimeout: 3000, filled: true})}>Toast danger filled</button>
    </>
  );
};

export default App;
```

### Use in Class Component?

```tsx
// To use toast with Class component
// We can use it with HOC "withToast"
import React from 'react'
import { withToast } from 'react-toastx'

class SomeComponentUseClass extends React.Component {
  render() {
    const { toast } = this.props;

    return (
      <div>
        <button onClick={() => toast.success('Successfully !!!', { closeTimeout: 3000 })}>
          Success toast
        </button>

        <button onClick={() => toast.warning('Warning !!!', { closeTimeout: 3000 })}>
          Warning toast
        </button>

        <button onClick={() => toast.error('Error !!!', { closeTimeout: 3000 })}>
          Error toast
        </button>
      </div>
    );
  }
}

export default withToast(SomeComponentUseClass);

```

# API

| Name          | Type                                                     | Description |
| ------------- | -------------------------------------------------------- | ----------- |
| toast.success | (message : **string**, config : **ToastConfig**) => void |             |
| toast.error   | (message : **string**, config : **ToastConfig**) => void |             |
| toast.warning | (message : **string**, config : **ToastConfig**) => void |             |

## ToastConfig
| Name         | Type                                     | Description          |
| ------------ | ---------------------------------------- | -------------------- |
| position     | <top - bottom> - <left - center - right> | Example: "top-right" |
| filled       | Boolean                                  |                      |
| closeTimeout | Number                                   |                      |
| onClose      | void                                     |                      |
| onOpen       | void                                     |                      |
| onClick      | void                                     |                      |

# Changelog
| Version | Description                                                 |
| ------- | ----------------------------------------------------------- |
| 1.0.0   | Publish package                                             |
| 1.0.1   | Fix the error wrong position toast stack in another project |



## License

MIT © [duongductrong](https://github.com/duongductrong)
