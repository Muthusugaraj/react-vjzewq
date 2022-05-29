import React from 'react';
import ReactDOM from 'react-dom';

class Nice extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
    this.state = {
      name: 'V18',
      subs: 5,
    };
  }
  clicked() {
    let subs = this.state.subs + 1;
    this.setState({
      ...this.state,
      subs: subs,
    });
  }
  render() {
    return (
      <>
        <p>{this.props.name} function</p>
        <p>Channel Name: {this.props.name}</p>
        <p>Subscriber: {this.state.subs}</p>
        <div>
          <button onClick={this.clicked}>Subscribe</button>
        </div>
      </>
    );
  }
}

export default Nice;
