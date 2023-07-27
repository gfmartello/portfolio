import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Page from './pages/Page';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
