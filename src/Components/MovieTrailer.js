import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "../App.css";

const MovieTrailer = ({ movies }) => {
  const { id } = useParams();
  let idmovie = Number(id);
  const movie = movies.find((elem) => elem.id === idmovie);

  const options = {
    height: "450",
    width: "800",
  };

  return (
    <div className="movies__container">
      <div style={{ margin: "1rem auto" }}>
        <Button className="add_button" variant="outlined">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Go back to Home Page
          </Link>
        </Button>
      </div>
      <div className="trailer__container">
        <div className="trailer_img_video">
          <img className="trailer__img" src={movie.posterURL} alt="poster" />
          <YouTube videoId={movie.videoURL} opts={options} />
        </div>
        <div className="trailer__description">
          <h3>Overview:</h3>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
