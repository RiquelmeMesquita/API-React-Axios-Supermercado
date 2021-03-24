import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;