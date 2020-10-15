import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };
  SearchSubmit = async (term) => {
    const result = await Youtube.get("/search", {
      params: { q: term },
    });
    console.log(result.data.items);
    this.setState({ videos: result.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar SearchSubmit={this.SearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
