import React from "react";

type Props = {};

export function Form({}: Props) {
  return (
    <form className="my-5 flex flex-col items-center text-center">
      <div className="flex justify-center items-center flex-wrap gap-x-1 mb-2">
        <label htmlFor="search">I want to make a presentation about </label>
        <input
          type="text"
          id="search"
          required
          className="px-2 py-1 border"
          placeholder="...topic"
        />
      </div>
      <button className="px-2 py-1 rounded bg-primary max-w-fit hover:bg-secondary">
        Submit
      </button>
    </form>
  );
}
