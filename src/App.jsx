import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="banner--fadeBottom" />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
      <footer>
        <a href="https://github.com/lalit2005">
          <img
            src="https://fontmeme.com/permalink/210101/42846c999c16a0840006897c1477a079.png"
            alt="NETFLIX By LALIT"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
