import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PlayingMovie from './pages/PlayingMovie';
import BoxOffice from './pages/BoxOffice';
import MovieSearch from './pages/MovieSearch'
import MovieDetail from './pages/MovieDetail';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<MovieSearch/>}></Route>
        <Route path='PlayingMovie' element={<PlayingMovie/>}></Route>
        <Route path='Boxoffice' element={<BoxOffice/>}></Route>
        <Route path='movieDetail/:movieId' element={<MovieDetail/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
