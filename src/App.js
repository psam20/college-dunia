import React from 'react';
import College from './Components/College/college';

import './App.css';

function App({colleges}) {

  return (
    <div className="App">
         <div className="header">
               Colleges in North India
         </div>
         <div className="container">
        {
          colleges.map((college,i)=>(
             <College key={i} c={college} />
          ))
        }
        </div>
    </div>
  );
}

export default App;
