import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
    ],
  };
  // deleteList = (id) => {
  //   var x = this.state.counters.filter((val) => val.id != id);
  //   this.setState({ counters: x });
  // };
  incrementCount = (id) => {
    var newCounter = this.state.counters;
    ++newCounter[id].value;
    this.setState({ counters: newCounter });

    this.setState({ counters: newCounter });
  };
  decrementCount = (id) => {
    var newCounter = this.state.counters;
    --newCounter[id].value;
    this.setState({ counters: newCounter });
  };
  resetCount = (id) => {
    var newCounter = this.state.counters;
    newCounter[id].value = 0;
    this.setState({ counters: newCounter });
  };
  resetAll = () => {
    let x = this.state.counters.map((val) => {
      val.value = 0;
      return val;
    });
    this.setState({ counters: x });
  };
  noOfItems = () => {
    let i = 0;
    this.state.counters.map((val) => (i += val.value));
    console.log(i);
    return <span>{i}</span>;
  };
  render() {
    return (
      <div>
        <NavBar items={this.state.counters} />

        {this.state.counters.map((val) => (
          <div key={val.id}>
            <center>
              <Counter
                count={val}
                // onDelete={this.deleteList}
                onIncrement={this.incrementCount}
                onDecrement={this.decrementCount}
                onReset={this.resetCount}
                onResetAll={this.resetAll}
              />
            </center>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
