import React, { Component } from "react";
class NavBar extends Component {
  noOfItems = () => {
    let i = 0;
    this.props.items.map((val) => {
      i += val.value;
    });

    return i;
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-info">
        <a className="navbar-brand" href="#">
          Number of Items={this.noOfItems()}
        </a>
      </nav>
    );
  }
}

export default NavBar;
