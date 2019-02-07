import React from 'react'

class MovieRow extends React.Component{
    viewMovie(){
        // url for movie db + id of movie
        // props => data in props is used to render the Component with dynamic data
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href= url
    }
    // takes a function that returns a React element and calls it instead of implementing its own render logic.
    render() {
        // this. reffering to "this" movie with this id
        return <table key={this.props.movie.id}>
            <tbody id="movies_table">
                <tr id="movie_row_item">
                    <td>
                        <img alt="movie_poster" id="movie_poster" width="150" src={this.props.movie.poster_src}/>
                    </td>
                    <td id="movie_title_overview">
                        <h2>{this.props.movie.title}</h2>
                        <p id="overview">{this.props.movie.overview}</p>
                        {/* view button => return view page from movie db for that movie */}
                        <input type="button" className = "button" onClick={this.viewMovie.bind(this)} value="View Details"></input>
                    </td>
                </tr>
            </tbody>
        </table>
    }
}

export default MovieRow