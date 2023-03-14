import Game from "./components/Game";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InitialPage from "./pages/InitialPage";

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<InitialPage />}/>
        <Route path='/board1' element={<Game />} />
        <Route path='/board2' element={<Game />} />
      </Routes>
      
    </div>

    </Router>
    
  );
}

export default App;
