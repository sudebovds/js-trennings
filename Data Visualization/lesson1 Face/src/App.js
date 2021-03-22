import { range } from 'd3-array';
import React from 'react';
import { Face } from './components/face/Face';

const width = 160;
const height = 160;

const arr = range(6 * 3);

const App = () => arr.map( (key, id) =>  {

  return (
    <Face 
      width = {width}
      height = {height}
      centerX = {width / 2}
      centerY = {height / 2}
      strokeWidth = {10}
      radius = {height / 2 - 10}
      eyeOffsetX = {30}
      eyeOffsetY = {30}
      eyeRadius = {5 + Math.random() * 10}
      mouthWith = {7 + Math.random() * 9}
      mouthRadius = {30 + Math.random() * 10}

      key = {id + key}
    />
  );
});

export default App;
