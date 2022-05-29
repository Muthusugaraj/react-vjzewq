import React from 'react';
import ReactDOM from 'react-dom';

function Nice(props) {
  const clicked = (e) => {
    console.log(e);
  };
  return (
    <>
      <div>I'm {props.name}</div>
      <button>Click me</button>
    </>
  );
}

export default Nice;
