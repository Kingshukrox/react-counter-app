import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onResetAll} className="btn btn-danger m-2">
          Reset all to 0
        </button>
        {this.props.value.map((value) => (
          <Counter
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
            value={value}
            key={value.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
