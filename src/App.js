import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/divyabenpatel-portfolio/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
