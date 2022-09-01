import './App.css';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner.js'
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar/> 
    <Banner/>
      <Row 
       isLargeRow
      title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row  title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row  title="Comnedy Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row  title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Row  title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
      <Row  title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
