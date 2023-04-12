import logo from './logo.svg';
import './App.css';
import CountUpDown from './components/countUpdown';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from '@reduxjs/toolkit';

export const increase = () => {
  return {
    type: 'INCREASE',
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE',
  };
};

const count = 1;

const counterReducer = (state = count, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;

    default:
      return state;
  }
};

function App() {
  const store = createStore(counterReducer);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store}>
          <CountUpDown />
        </Provider>
      </header>
    </div>
  );
}

export default App;
