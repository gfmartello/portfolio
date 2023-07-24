import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Page from './pages/Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
