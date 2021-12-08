import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Range from './components/Range/Range.js';
import Form from './components/Form/Form.js';
import { Fragment } from 'react/cjs/react.production.min';

ReactDOM.render(
    <Fragment>
      <Range />
      <Form />
    </Fragment>,
  document.getElementById('root')
);