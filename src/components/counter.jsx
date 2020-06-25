import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Item Number {this.props.count.id + 1}</h1>
        <div style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.props.count.value}
        </div>
        <br></br>
        <button
          onClick={() => this.props.onIncrement(this.props.count.id)}
          className="btn btn-warning m-2"
        >
          🔼
          {console.log(this.props.count.id, "inside counter increment")}
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.count.id)}
          className="btn btn-warning m-2"
        >
          🔻
        </button>
        <button
          onClick={() => {
            this.props.onReset(this.props.count.id);
          }}
          className="btn btn-warning m-2"
        >
          Reset
        </button>
        {/* <button
          onClick={() => {
            this.props.onDelete(this.props.count.id);
          }}
          className="btn btn-sm btn-danger"
        >
          Delete Item
        </button> */}
      </div>
    );
  }
}

export default Counter;
