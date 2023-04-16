import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import MovieList from './pages/MovieList'
import MoveActor from './pages/MovieActor'


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='moveList' element={<MovieList/>}></Route>
        <Route path='moveActor' element={<MoveActor/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;