// imports
import React, { Component } from 'react';
//importing css file
import './App.css';
// importing movierow object from js file
import MovieRow from './MovieRow.js'
// importing jquery feature
import $ from 'jquery'
// import custom javascript file
// import './custom_script.js';

class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {}
        // pre-search for when the page is loaded; prevents the page being empty upon loading
        this.performSearch("a")
    }
    // searchTerm holds value of user input to search bar
    performSearch(searchTerm){
        console.log("Perform search using moviedb")
        // url to movie db api + unique key + users input
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=2cf053d884239c0af16cd6d375ffa80f&query=" + searchTerm
        // ajax call to the link above
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data")
                const results = searchResults.results
              // array containing movies
                var movieRows = []
                // returns poster for each movie from db
                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
                   // console.log(movie.poster_path)
                    const movieRow = <MovieRow key= {movie.id} movie={movie}/>
                    movieRows.push(movieRow)
                })

                this.setState({rows: movieRows})
            },
            error: (xhr, status, err) => {
                console.error("failed to fetch data")
            }
        })
    }
    searchChangeHandler(event){
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }
    // takes a function that returns a React element and calls it instead of implementing its own render logic.
  render() {
    return (
      <div className="App">
        <table className="navbar">
            <tbody>
                <tr>
                    <td>
                       <h3 style={{ marginLeft:100 }}> Movie Database <img alt="icon" width="35" src="white_clapperboard.png" /> </h3> 
                    </td>
                    <td>
                        <input onChange={this.searchChangeHandler.bind(this)} type="text" name="search" autoComplete = "off" placeholder="Search for a Movie..." />
                    </td>
                </tr>
            </tbody>
        </table>      
        
       {this.state.rows}
        
       {/* <button onClick="topFunction()" id="myBtn" title="Go to top">Top</button> */}

      </div>
    );
  }
}

export default App;