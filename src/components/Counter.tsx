import React, { memo } from "react";
import { CounterProps } from "../types";

function Counter(props: CounterProps) {
    const count=props.counter()
  return (
    <div className="border border-dark m-2 card p-4 d-inline-block">
        <h4>Counter Component</h4>
      <form className="input-group d-flex align-items-center" onSubmit={(e)=>{e.preventDefault();props.increaseCount()}}>
        <input
          type="text"
          className="form-control w-auto"
          aria-describedby="increase"
          value={count}
          readOnly
        />
        <button className="input-group-text btn border" id="increase">
          +
        </button>
      </form>
    </div>
  );
}

export default memo(Counter);
