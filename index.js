import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/Home.jsx';
import { FormProvider } from './src/context/FormContext';

ReactDOM.render(
  <FormProvider>
    <Home/>
  </FormProvider>,
  document.getElementById('root')
);