import React from 'react';
import ReactDOM from 'react-dom';
import './jsx/css/Root.css';
import "./lib/Bootstrapper.css"; // Bootstrapper for Tailwind
import Core from './jsx/Core';
import ReactTooltip from 'react-tooltip';

ReactDOM.render(
  <React.StrictMode>
          <ReactTooltip className="Tooltip" />

    <Core />
  </React.StrictMode>,
  document.getElementById('root')
);