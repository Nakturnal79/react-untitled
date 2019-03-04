import React, { Component } from "react";
import { Like } from "./components/like";
import TableHeader from "./components/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody className="movies-body">
          {movies.map(movie => (
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
