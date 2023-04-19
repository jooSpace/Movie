import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './pages/Main';
import BoxOffice from './pages/BoxOffice';
import MovieSearch from './pages/MovieSearch'
import MoveActor from './pages/MovieActor'
import MovieDetail from './pages/MovieDetail';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='Boxoffice' element={<BoxOffice/>}></Route>
        <Route path='MovieSearch' element={<MovieSearch/>}></Route>
        <Route path='moveActor' element={<MoveActor/>}></Route>
        <Route path='movieDetail/:movieId' element={<MovieDetail/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
