import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}
function reducer (state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
    return {
      count: state.count + 1
    }
    case 'DECREMENT':
    return {
      count: state.count - 1
    }
    case 'RESET':
    return {
      count: 0
    }
    default:
      return state
  }
}

const store = createStore (reducer);

const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);


render(<App />, document.getElementById('root'));


// export default store;





// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
