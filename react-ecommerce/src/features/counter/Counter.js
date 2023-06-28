import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={dispatch(increment())}>INCREMENT</button>
    </div>
  );
}
