import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBMTaLVcA8YJRSxVJ4RxUta-LcS3FM6TYg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
      this.handleSearch('surfboards');
      
    }
    handleSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => this.setState({
            videos,
            selectedVideo: videos[0]
        }))
    }
    handleSelect(selectedVideo) {
        this.setState({
            selectedVideo
        })
    }
    render() {
        return (
            <div>
                <SearchBar handleSearch={term => this.handleSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.handleSelect}  videos={this.state.videos}/>
            </div>
            );
    }
    
}


ReactDom.render(<App />, document.querySelector('.container'));