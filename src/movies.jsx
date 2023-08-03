import { useState } from "react";
import "./mov.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

import InfoIcon from "@mui/icons-material/Info";

export function Movielist({ Movies }) {
  const [name, setname] = useState();
  const [summary, setsummary] = useState();
  const [rating, setrating] = useState();
  const [poster, setposter] = useState();

  return (
    <div className="App">
      <div>
        <TextField
          //   id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(event) => setname(event.target.value)}
        />
        <TextField
          //   id="filled-basic"
          label="Summary"
          variant="filled"
          type="text"
          onChange={(event) => setsummary(event.target.value)}
        />
        <TextField
          //   id="filled-basic"
          label="Rating"
          variant="filled"
          onChange={(event) => setrating(event.target.value)}
        />
        {/* <input
          type="text"
          onChange={(event) => setname(event.target.value)}
      />
        <input
          type="text"
          onChange={(event) => setsummary(event.target.value)}
          placeholder="summary"
        />
        <input
          type="text"
          onChange={(event) => setrating(event.target.value)}
          placeholder="rating"
        /> */}
        <TextField
          //   id="filled-basic"
          label="Poster"
          variant="filled"
          onChange={(event) => setposter(event.target.value)}
          placeholder="Poster link"
        />
        {/* <input
          type="text"
          onChange={(event) => setposter(event.target.value)}
          placeholder="Poster link"
        /> */}
        <button
          onClick={(event) =>
            setMovies([
              ...Movies,
              {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
              },
            ])
          }
        >
          Add Movie
        </button>
      </div>
      {/* {Name}-{rating}-{summary}-{poster} */}
      {Movies.map((x, index) => (
        <Moviecard
          name={x.name}
          poster={x.poster}
          summary={x.summary}
          rating={x.rating}
          key={index}
          id={index}
        />
      ))}
    </div>
  );
}
function Moviecard({ name, poster, summary, rating, id }) {
  const [show, setShow] = useState(false);

  const [summary2, setsummary2] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="moviecard">
      <img className="pic" src={poster} />
      <div className="head">
        <h2>
          {name}-{id}
        </h2>{" "}
        <h2>❤️ {rating}</h2>
      </div>
      <IconButton
        onClick={() => setShow(show == true ? false : true)}
        color="primary"
        aria-label="More info"
      >
        {show ? <KeyboardArrowDownIcon /> : <VisibilityIcon />}
        {/* <KeyboardArrowDownIcon /> */}
      </IconButton>
      {/* <button onClick={() => setsummary1(summary1 == true ? false : true)}>
        Moreinfo
      </button> */}
      {/* /movies/0 */}
      <IconButton
        onClick={() => navigate("/movies/" + id)}
        color="primary"
        aria-label="More info"
      >
        <InfoIcon />
        {/* <KeyboardArrowDownIcon /> */}
      </IconButton>

      {/* <button onClick={() => navigate("/color-game")}> colors </button> */}
      {show ? <p>{summary}</p> : ""}

      {/* <p>{summary}</p> */}
    </div>
  );
}
