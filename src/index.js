import React from 'react';
import ReactDOM from 'react-dom/client';
import Myabout, { Myabout3 } from './About';
import { Myabout1,Myabout2,Myabout4 } from './About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Myabout></Myabout>
<Myabout1></Myabout1>
<Myabout2></Myabout2>
<Myabout3></Myabout3>
<Myabout4></Myabout4>
  </React.StrictMode>
);


