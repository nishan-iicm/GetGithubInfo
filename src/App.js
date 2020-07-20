import React, { Fragment, Component } from "react";

import "./App.css";
import Banner from "./components/banner/banner.component";
import SearchBox from "./components/search-box/search-box.component";
import Card from "./components/card/card.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }));
  };

  render() {
    return (
      <Fragment>
        <Banner />
        <SearchBox onInputChange={this.onInputChange} />
        {this.state.userData && this.state.searchName !== "" ? <Card profile={this.state.userData} /> : <div className="no-data">No user Found</div>}
      </Fragment>
    );
  }
}

export default App;
