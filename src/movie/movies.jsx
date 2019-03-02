import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import MoviesTable from "./components/moviesTable";
import Pagination from "./components/pagination";
import { Filter } from "./components/filter";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genre: [],
    selectedGenre: ""
  };

  componentDidMount() {
    const movies = getMovies();
    const genre = getGenres();
    const genreAll = [{ _id: "", name: "All genres" }, ...genre];
    this.setState({ movies: movies, genre: genreAll });
  }
  handleDelete = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies: movies, currentPage: 1 });
    // console.log(movies);
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleGenre = item => {
    this.setState({ selectedGenre: item._id, currentPage: 1 });
  };
  handleChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre
    } = this.state;

    const filtered =
      selectedGenre !== ""
        ? allMovies.filter(movie => selectedGenre === movie.genre._id)
        : allMovies;

    const movies = paginate(currentPage, pageSize, filtered);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    // console.log(this.state.movies);
    const { length: count } = this.state.movies;

    if (count === 0) return <h1 style={paddingTop}> No movies in database</h1>;
    const { totalCount, data: movies } = this.getPagedData();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3 pt-5 mt-2">
            <Filter
              onClick={this.handleGenre}
              genre={this.state.genre}
              selected={this.state.selectedGenre}
            />
          </div>
          <div className="col-md-9">
            <p style={paddingTop}>There are {count} movies in the base </p>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              count={totalCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              changePage={this.handleChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const paddingTop = {
  paddingTop: "20px"
};
export default Movies;
