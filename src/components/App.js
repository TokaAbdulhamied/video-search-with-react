import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {
  SearchSubmit = (item) => {
    console.log(item);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar SearchSubmit={this.SearchSubmit} />
      </div>
    );
  }
}

export default App;
