import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange (event) {
        let value = event.target.value;
        this.setState({term: value});
    }
    render() {
        return (
        <div className="search-bar">
         <label htmlFor="search-input">Search Youtube</label>
            <input
            id="search-input"
            name="search-bar" 
            type="search"
            onChange={this.onInputChange} 
            value={this.state.term }
            />
            <button onClick={() => this.props.handleSearch(this.state.term)}>Search</button>
        </div>
        );
    }
    
}


export default SearchBar;