import { PromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { LLMChain } from "@langchain/classic/chains";
import { RunnableSequence } from "@langchain/core/runnables";
dotenv.config();

async function personalisedPitch(
    course: string,
    role: string,
    wordLimit: number
) {
    const promptTemplate = new PromptTemplate({
        template:
            "Describe the importance of learning {course} for a {role}. Limit the output to {wordLimit} words.",
        inputVariables: ["course", "role", "wordLimit"],
    });
    const formattedPrompt = await promptTemplate.format({
        course,
        role,
        wordLimit,
    });


    const llm = new ChatOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        model: "gpt-4o-mini",
        temperature: 0.1,
        topP: 1,
    });

    const outputParser = new StringOutputParser();

    // Option 1 - Langchain Legacy Chain
    // const legacyChain = new LLMChain({
    //     prompt: promptTemplate,
    //     llm,
    //     outputParser,
    // });

    // const legacyResponse = await legacyChain.invoke({
    //     course,
    //     role,
    //     wordLimit,
    // });
    // console.log("Legacy Chain Response:");
    // console.log(legacyResponse);


    // const lcelChain = promptTemplate.pipe(llm).pipe(outputParser);

    const lcelChain = RunnableSequence.from([
        promptTemplate,
        llm,
        outputParser]);

    const lcelResponse = await lcelChain.invoke({
        course,
        role,
        wordLimit,
    });

    console.log("Answer from LCEL chain: ", lcelResponse);
}

await personalisedPitch("Generative AI", "Javascript Developer", 100);