import React from "react";

class SearchBar extends React.Component {
  state = { searchItem: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.SearchSubmit(this.state.searchItem);
  };
  onInputChnage = (e) => {
    this.setState({ searchItem: e.target.value });
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field ">
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search"
              value={this.state.searchItem}
              onChange={this.onInputChnage}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
