import Game from "./components/Game";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InitialPage from "./pages/InitialPage";
import board1 from '../src/components/images/board1.jpeg'
import board2 from '../src/components/images/board2.jpeg'

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<InitialPage />}/>
        <Route path='/board1' element={<Game img={board1} id={'board1'}/>} />
        <Route path='/board2' element={<Game img={board2} id={'board2'}/>} />
      </Routes>
      
    </div>

    </Router>
    
  );
}

export default App;
