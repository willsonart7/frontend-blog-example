import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import postReducer from './Reducers/PostReducer'

// const composedEnhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(logAction, reportError)
// );

const store = createStore(
  postReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
