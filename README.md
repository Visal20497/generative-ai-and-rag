# GenAI

**Repository:** genai

A TypeScript-based Generative AI application leveraging LangChain and OpenAI for intelligent conversation, document processing, and retrieval-augmented generation (RAG).

## Overview

This project demonstrates core GenAI patterns including:

- Direct LLM interactions using OpenAI APIs
- Prompt templating and chaining
- Retrieval-Augmented Generation (RAG) for document-based Q&A
- Interactive terminal chat interface

## Project Structure

```
src/
├── helloGenAI.ts          # Basic LLM interaction example
├── llmChain.ts            # Prompt templates and LLMChain usage
├── utils/
│   └── chat.ts            # Interactive chat interface utility
└── rag/
    ├── ragLceL.ts         # RAG chain implementation
    ├── crawlDocuments.ts  # Web document crawling
    ├── embeddings.ts      # Embedding generation
    ├── loadDocuments.ts   # Document loading utilities
    ├── retriever.ts       # Vector store retriever setup
    ├── splitDocuments.ts  # Document chunking
    └── vectorization.ts   # Document vectorization utilities
```

## Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key
- Pinecone API key (for vector storage)

## Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_INDEX_NAME=your_index_name
   ```

## Running the Application

### Basic LLM Example

```bash
npx tsx src/helloGenAI.ts
```

### Prompt Chain Example

```bash
npx tsx src/llmChain.ts
```

### RAG Chat Interface

```bash
npx tsx src/rag/ragLceL.ts
```

## Key Technologies

- **LangChain**: Framework for building LLM-powered applications
- **OpenAI**: GPT models for text generation
- **Pinecone**: Vector database for semantic search
- **Cheerio**: Web scraping for document extraction
- **TypeScript**: Type-safe development

## Environment Variables

| Variable              | Description                |
| --------------------- | -------------------------- |
| `OPENAI_API_KEY`      | Your OpenAI API key        |
| `PINECONE_API_KEY`    | Your Pinecone API key      |
| `PINECONE_INDEX_NAME` | Pinecone vector index name |

## Development

### Code Style

- TypeScript strict mode enabled
- Follow organization coding standards (TDD, DRY, 80%+ test coverage)
- Use meaningful variable and function names

### Testing

```bash
npm test
```

## Architecture

### RAG Pipeline

1. **Document Crawling**: Extract documents from web sources using Cheerio
2. **Document Loading**: Parse and prepare documents for processing
3. **Embeddings**: Generate vector embeddings using OpenAI
4. **Vectorization**: Store embeddings in Pinecone
5. **Retrieval**: Query vector store for relevant documents
6. **Generation**: Use LLM with retrieved context for Q&A

## License

ISC
