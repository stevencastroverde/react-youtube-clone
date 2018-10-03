import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange (event) {
        let value = event.target.value;
        this.setState({term: value});
    }
    render() {
        return <input 
        onChange={this.onInputChange} 
        value={this.state.term }
        />;
    }
    
}


export default SearchBar;