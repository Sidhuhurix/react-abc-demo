import React from "react";
import "./main.css";
//import { MovieCard } from "./MovieCard";
import { Colorgame } from "./colorgames";
import { Movielist } from "./movies";

import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}

      {/* <Colorgame /> */}
      {/* <Movielist /> */}
      <nav>
        <Link to="/color-game">Colorgame</Link>
        <Link to="/sid">
          <h1>welcome</h1>
        </Link>
        <Link to="/">Home</Link>
        <p></p>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/sid" element={<h1>Welcome to my page!</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movielist />} />
        <Route path="/color-game" element={<Colorgame />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>hello Sid</h1>
    </div>
  );
}
function Error() {
  return (
    <div>
      <h1>Error 404 not found </h1>
    </div>
  );
}
export function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "5px",
  };
  return <div style={styles}></div>;
}
