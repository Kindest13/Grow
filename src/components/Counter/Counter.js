import React, { useState } from "react";
import PropTypes from "prop-types";
import './Counter.css';

export default function Counter({ render }) {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  const decrement = () => setCounter((prevCounter) => prevCounter - 1);

  return <div className="counter-wrapper">{render({ increment, decrement, counter })}</div>;
}

Counter.propTypes = {
  render: PropTypes.element,
};
