import React, { Component } from "react";
import { Like } from "./components/like";
import TableHeader from "./components/tableHeader";
import TableBody from "./components/tableBody";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            this.props.onDelete(movie);
          }}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, sortColumn, onSort, onLike, onDelete } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={movies}
          onDelete={onDelete}
          onLike={onLike}
          columns={this.columns}
        />
      </table>
    );
  }
}

export default MoviesTable;
