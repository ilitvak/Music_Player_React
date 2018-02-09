import React, { Component } from 'react';

// Class level component - since it manages state.
class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <div>
                <input style={{ width: '50%'}} placeholder="search music" onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default SearchBar;