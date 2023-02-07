import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

type ResponseData = {
  text: string;
  error: {
    message: string;
  };
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generate(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // if (!configuration.apiKey) {
  //   res.status(500).json({
  //     error: {
  //       message:
  //         "OpenAI API key not configured, please follow instructions in README.md",
  //     },
  //   });
  //   return;
  // }

  const prompt = req.body.prompt || "";
  // if (prompt.trim().length === 0) {
  //   res.status(400).json({
  //     error: {
  //       message: "Please send your prompt",
  //     },
  //   });
  //   return;
  // }
  if (prompt.trim().length === 0) {
    return new Response("Please send your prompt", { status: 400 });
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(prompt),
    temperature: 0.6, // Higher value means the model will take more risks.
    // max_tokens: 2048, // The maximum number of tokens to generate in the completion.
    // frequency_penalty: 0.5, // Number between -2.0 and 2.0.
    // presence_penalty: 0 // Number between -2.0 and 2.0.
  });

  const response =
    result.data.choices[0].text?.trim() || "Sorry, there was a problem!";
  res.status(200).json({ text: response });
}

function generatePrompt(prompt) {
  const capitalizedAnimal =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
