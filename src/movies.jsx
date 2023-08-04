import { useEffect, useState } from "react";
import "./mov.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

import InfoIcon from "@mui/icons-material/Info";

export function Movielist() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://64c3961867cfdca3b65fef6d.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
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
          id={x.id}
        />
      ))}
    </div>
  );
}
function Moviecard({ name, poster, summary, rating, id }) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="moviecard">
      {/* <Card sx={{ maxWidth: 345 }}> */}

      <CardContent></CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        <IconButton
          onClick={() => setShow(show == true ? false : true)}
          color="primary"
          aria-label="More info"
        ></IconButton>
      </CardActions>
      {/* </Card> */}
      <Card sx={{ maxWidth: 345 }}>
        <img className="pic" src={poster} />
        <CardMedia
        // component="img"
        // alt="Poster"
        // height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        />
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
      </Card>
    </div>
  );
}
