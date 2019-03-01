import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import MoviesTable from "./components/moviesTable";
import { Like } from "./components/like";

class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies: movies });
  }
  handleDelete = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies: movies });
    // console.log(movies);
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  render() {
    // console.log(this.state.movies);
    const { length: count } = this.state.movies;

    if (count === 0) return <h1 style={paddingTop}> No movies in database</h1>;
    return (
      <React.Fragment>
        <p style={paddingTop}>There are {count} movies in the base </p>
        <MoviesTable
          movies={this.state.movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}
const paddingTop = {
  paddingTop: "20px"
};
export default Movies;
