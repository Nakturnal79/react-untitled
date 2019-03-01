export function paginate(currentPage,pageSize,movies) {
    const start = (currentPage -1 ) * pageSize ;
    return  movies.slice(start,start + 4);
}