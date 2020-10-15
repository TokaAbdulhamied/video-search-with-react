import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoCard from "./VideoCard";
class App extends React.Component {
  state = { videos: [], selctedVideo:null };
  componentDidMount(){
    this.SearchSubmit("foot ball")
  }
  SearchSubmit = async (term) => {
    const result = await Youtube.get("/search", {
      params: { q: term },
    });
    console.log(result.data.items);
    this.setState({ videos: result.data.items , selctedVideo:result.data.items[1]});
  };
  onClickedVideo = (video) =>{
    this.setState({selctedVideo:video})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar SearchSubmit={this.SearchSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="twelve wide column">
          <VideoCard video={this.state.selctedVideo}/>
          </div>
          <div className="four wide column">
          <VideoList videos={this.state.videos} onClickedVideo={this.onClickedVideo} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
