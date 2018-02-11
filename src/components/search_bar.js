import React, { Component } from 'react';

// Class level component - since it manages state.
class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { 
            term: '' 
        };
    }

    onInputChange = (term) => {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                style={{ width: '50%'}} 
                placeholder="search music" 
                onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>
        )
    }
}

export default SearchBar;