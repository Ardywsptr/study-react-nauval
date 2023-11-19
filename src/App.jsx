/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './app.css';

function Button({ operator, onClickBtn }) {
  return <button onClick={onClickBtn}>{operator}</button>
}

function App() {
  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
  }

  function handleClickMinus() {
    setCount(count - 1);
  }

  return (
    <>
      <Button operator={'-'} onClickBtn={handleClickMinus} count={count} />
      <span>{count}</span>
      <Button operator={'+'} onClickBtn={handleClickPlus} count={count} />
    </>
  )
}

export default App
