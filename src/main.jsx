import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReduxProvider } from './store';

import './index.css';

// import { App } from './App.jsx';
import { PokemonApp } from './pokemon/PokemonApp.jsx';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <ReduxProvider>
      <PokemonApp />
    </ReduxProvider>
  </React.StrictMode>
);
