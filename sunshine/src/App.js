import React from 'react';
import './App.css';

import ForecastContainer from './ForecastContainer';

function App() {
  return (
    <>
      <div className="globalContainer">
        <ForecastContainer />
      </div>
      <div className="flaticons">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
    </>
  );
}

export default App;