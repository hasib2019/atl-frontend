import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const MovieView = ({ movieId }) => {
  const [movie, setMovie] = React.useState(null);
  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  const getMovie = async (id) => {
    try {
      const res = await fetch(`http://localhost:8025/movie/get-movie-list/${id}`);
    const data = await res.json();
    setMovie(data?.data);
    } catch (error) {
      
    }
  };
  console.log({ movie });
  const RatingMovie = async (id) => {
    console.log(id)
    try {
      const res = await axios.put(
        `http://localhost:8025/movie/get-movie-list/${id}`,
        { id }
      );
      getMovie(id);
    } catch (error) {}
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h1>Movie Description: {movie?.description}</h1>
          <h1>Movie Title: {movie?.movieTitle}</h1>
          <h1>Movie Ratig: {movie?.rating}</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={() => RatingMovie(movie.id)}
          >
            {" "}
            Rating now{" "}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieView;
