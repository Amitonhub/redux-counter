import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "../actions";
import { plusMinusProps } from "../types/Types";

export default function Counter() {
  const myState = useSelector((state: plusMinusProps) => state.plusMinus.state);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="heading">Counter</h1>
    <br />
      <div className="counter">
        <button className="button" onClick={() => dispatch(decNumber())}>
          -
        </button>
        <br />
        <span className="count">{myState}</span>
        <br />
        <button className="button" onClick={() => dispatch(incNumber())}>
          +
        </button>
        <br />
        <br />
      </div>
    </>
  );
}