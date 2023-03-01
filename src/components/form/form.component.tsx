import { FormEvent, useRef, useState } from "react";

import { openai } from "@/tools";

export function Form() {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    if (!inputRef.current) return;

    if (inputRef.current.value.trim().length === 0) return;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `List 4 product keywords to target on a landing page of ${inputRef.current.value}. Include keywords that customers would search to find this page`,
      max_tokens: 100,
    });

    console.log(completion.data.choices[0].text);
    console.log(completion.data);

    if (completion.data.choices[0].text) {
      setKeywords(
        completion.data.choices[0].text
          .split("\n")
          .filter(Boolean)
          .map((str) => {
            const [_, ...rest] = str.split(". ");
            return rest.join(". ");
          })
      );
    }

    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md">
        <div className="flex justify-center items-center flex-wrap gap-x-1 mb-2">
          <label
            className="block text-primary font-medium mb-2"
            htmlFor="topic">
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
      {loading && <div>Loading...</div>}

      {keywords && !loading && (
        <ul>
          {keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      )}
    </>
  );
}
