import React from 'react';
import ReactDOM from 'react-dom';
import { StartsWithQ } from './components/StartsWithQ';
import { SearchResultProvider } from './components/search/SearchProvider'; 
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SearchResultProvider>
      <StartsWithQ />
    </SearchResultProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// place this in imports: reportWebVitals();
