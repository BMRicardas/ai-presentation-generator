import { FormEvent, useRef } from "react";

export function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current) return;

    if (inputRef.current.value.trim().length === 0) return;

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md">
      <div className="flex justify-center items-center flex-wrap gap-x-1 mb-2">
        <label className="block text-primary font-medium mb-2" htmlFor="topic">
          I want to make a presentation about
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
          ref={inputRef}
          placeholder="...topic"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 rounded-full bg-tertiary text-white font-medium duration-150 hover:bg-secondary">
        Submit
      </button>
    </form>
  );
}
