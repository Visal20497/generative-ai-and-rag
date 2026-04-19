import dotenv from "dotenv";
import { OpenAIEmbeddings } from "@langchain/openai";

dotenv.config();
const embeddingsLLM = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
});

const embeddings = await embeddingsLLM.embedQuery("What is vector embedding?");

console.log(embeddings);

console.log("Array Length: ", embeddings.length);
