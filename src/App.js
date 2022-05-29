import React from 'react';
import './style.css';
import Nice from './Nice';
import NiceFun from './NiceFun';

export default function App() {
  const name1 = 'Class';
  const name2 = 'Function';
  return (
    <div>
      <h1>Hello Muthu!</h1>
      <Nice name={name1} title="name field" />
      {/*<NiceFun name={name2} title="name field" />*/}
    </div>
  );
}
