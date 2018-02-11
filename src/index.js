import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDS3amG1tsaRp0VKo2a9yEfUPOe9Y7ExXs';
const htmlContainer = document.querySelector('.container');

// Create a new component. This cmpt should produce some html
class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("post-malone");
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {

        const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300 )
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        )
    }
}

// Take this cmpts generated html and put it on the page (in the DOM) 

ReactDOM.render(<App />, htmlContainer);