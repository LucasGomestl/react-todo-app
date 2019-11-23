import React from 'react';
import {HashRouter} from 'react-router-dom'

import Routes from './routes'
import Menu from '../template/menu'

import '../template/custom.css'

function App() {
  return (
     <HashRouter>
          <div className='container'>
            <Menu />
            <Routes />
        </div>
     </HashRouter>
  );
}

export default App;
