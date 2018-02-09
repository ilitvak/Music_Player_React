import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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

        YTSearch({key: API_KEY, term: 'house music'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
            // this.setState({videos}) can also be written in es6 since both key and value have
            // the same name || just syntactic sugar
            console.log("The array of videos is: " + this.state.videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        )
    }
}

// Take this cmpts generated html and put it on the page (in the DOM) 

ReactDOM.render(<App />, htmlContainer);