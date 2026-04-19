import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";

dotenv.config();

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
});

try {
  const response = await llm.invoke(
    "Describe the importance of learning generative AI for JavaScript developers in 50 words.",
  );

  console.log(response.content);
} catch (error) {
  console.error("OpenAI call failed:", error);
  process.exitCode = 1;
}
