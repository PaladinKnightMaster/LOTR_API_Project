import './App.css';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
