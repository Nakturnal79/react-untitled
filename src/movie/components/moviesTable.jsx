import React, { Component } from "react";
import { Like } from "./like";

class MoviesTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => this.props.onSort("title")}>
              Title
            </th>
            <th scope="col" onClick={() => this.props.onSort("genre.name")}>
              Genre
            </th>
            <th scope="col" onClick={() => this.props.onSort("numberInStock")}>
              Stock
            </th>
            <th
              scope="col"
              onClick={() => this.props.onSort("dailyRentalRate")}
            >
              Rate
            </th>
            <th scope="col" />
            <th scope="col" />
          </tr>
        </thead>
        <tbody className="movies-body">
          {this.props.movies.map(movie => (
            <tr key={movie._id}>
              <th>{movie.title}</th>
              <th>{movie.genre.name}</th>
              <th>{movie.numberInStock}</th>
              <th>{movie.dailyRentalRate}</th>
              <th>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.props.onDelete(movie._id)}
                >
                  Delete
                </button>
              </th>
              <th>
                <Like
                  liked={movie.liked}
                  onClick={() => this.props.onLike(movie)}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
