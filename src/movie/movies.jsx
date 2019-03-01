import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import MoviesTable from "./components/moviesTable";
import { Like } from "./components/like";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1
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
  handleChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    // console.log(this.state.movies);
    const { length: count } = this.state.movies;

    const filtered = paginate(
      this.state.currentPage,
      this.state.pageSize,
      this.state.movies
    );

    if (count === 0) return <h1 style={paddingTop}> No movies in database</h1>;
    return (
      <React.Fragment>
        <p style={paddingTop}>There are {count} movies in the base </p>
        <MoviesTable
          movies={filtered}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
        />
        <Pagination
          count={count}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          changePage={this.handleChange}
        />
      </React.Fragment>
    );
  }
}
const paddingTop = {
  paddingTop: "20px"
};
export default Movies;
