export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  highlights: string[];
  challenges: string[];
  lessons: string[];
  futureImprovements: string[];
  github: string;
  liveDemo?: string;
  category: "ai-ml" | "fullstack" | "data-science";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "football-iq-ai",
    title: "Football IQ AI",
    subtitle: "Learn Football Through AI",
    description:
      "A Retrieval-Augmented Generation application that answers football questions using information retrieved from a curated knowledge base of football documents.",
    problem:
      "Football fans and analysts need quick, accurate answers grounded in real football knowledge — rules, tactics, player stats, and historical context — without sifting through hundreds of pages of documentation.",
    solution:
      "Built a full RAG pipeline that ingests football documents, embeds them into a vector database, and retrieves the most relevant context for each query. The LLM generates grounded responses with source citations and supports conversational follow-ups.",
    architecture: [
      "Knowledge Base (Markdown/PDF/TXT) organized by category",
      "Document Loader with Text Splitter (500 tokens, 100 overlap)",
      "Sentence Transformers embeddings (all-MiniLM-L6-v2)",
      "ChromaDB vector store with metadata filters",
      "Top-k similarity retrieval",
      "Chat history condensation for multi-turn context",
      "Structured response: Summary + Details + Sources + Related Questions",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "Groq API",
      "Llama 3.3 70B",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    highlights: [
      "SSE streaming for token-by-token response delivery",
      "Ingests new documents without code changes",
      "Low-relevance fallback — says 'I don't have enough information' when context is irrelevant",
      "15 hand-written Q&A pairs for retrieval quality evaluation",
    ],
    challenges: [
      "Balancing chunk size (500 tokens) for coherent context vs. precise retrieval",
      "Designing the condensation prompt to pass through standalone questions unchanged",
      "Single ChromaDB collection with metadata filters vs. multiple collections",
    ],
    lessons: [
      "RAG is only as good as your retrieval — investing in chunking strategy pays off massively",
      "Low-relevance fallback prevents hallucination and builds user trust",
      "Streaming responses dramatically improve perceived performance",
    ],
    futureImprovements: [
      "Hybrid search (semantic + keyword)",
      "Re-ranking layer for retrieval precision",
      "Multi-modal support for video analysis",
      "User feedback loop for response quality",
    ],
    github: "https://github.com/pruthvi189/football-iq-ai",
    category: "ai-ml",
    featured: true,
  },
  {
    slug: "stock-market-analysis",
    title: "Stock Market Forecasting Dashboard",
    subtitle: "ML-Powered Financial Prediction",
    description:
      "A Flask web application for exploring historical stock data and forecasting future prices using ARIMA, Prophet, and LSTM models.",
    problem:
      "Investors and analysts need to compare multiple forecasting approaches on real market data to make informed model selection decisions — not just pick the first algorithm that works.",
    solution:
      "Led a 4-person team building a full-stack forecasting platform that benchmarks three ML models on ~1,256 daily observations across multiple tickers, with interactive visualizations and time-series analysis.",
    architecture: [
      "Flask web application with SQLite-backed multi-user auth",
      "yfinance data fetching for any ticker + date range",
      "ADF stationarity testing and seasonal decomposition",
      "Three selectable models: ARIMA, Prophet, LSTM",
      "Interactive charts and visualizations",
      "Per-request model training with comparison metrics",
    ],
    techStack: [
      "Flask",
      "TensorFlow/Keras",
      "statsmodels",
      "pmdarima",
      "scikit-learn",
      "pandas",
      "yfinance",
      "SQLite",
      "Jupyter Notebook",
    ],
    highlights: [
      "LSTM achieved lowest error: RMSE 2.89, MAE 2.23",
      "LSTM outperformed ARIMA by 8% and Prophet by 30% on RMSE",
      "Analyzed accuracy vs. cost trade-off: LSTM 145.6s vs. ARIMA 12.3s training time",
      "Preprocessing pipeline with ADF stationarity testing and seasonal decomposition",
    ],
    challenges: [
      "Balancing training time with prediction accuracy across models",
      "Handling non-stationary time series data with proper transformations",
      "Building a preprocessing pipeline that works across different stock tickers",
    ],
    lessons: [
      "LSTM's 12x longer training time is justified only when accuracy is critical",
      "Time-series preprocessing (stationarity testing) is often more important than model choice",
      "Comparative benchmarking reveals insights that single-model evaluation misses",
    ],
    futureImprovements: [
      "Ensemble methods combining multiple models",
      "Real-time data streaming",
      "Sentiment analysis integration",
      "Portfolio-level forecasting",
    ],
    github: "https://github.com/pruthvi189/Stock_Market_Analysis",
    category: "ai-ml",
    featured: true,
  },
  {
    slug: "medify",
    title: "Medify — AI Medical Assistant",
    subtitle: "Top 25/500 Finalist, CVMU Hackathon",
    description:
      "A cross-platform React Native app with AI-powered medical report analysis, OCR for handwritten prescriptions, and real-time patient assistance.",
    problem:
      "Patients often struggle to understand medical reports, dosage instructions, and medication information. Handwritten prescriptions are particularly difficult to parse digitally.",
    solution:
      "Built the OCR and backend ML pipeline for a team of 4, achieving 90%+ accuracy extracting medicine names, dosages, and handwritten instructions. Integrated IBM Watson for real-time chat assistance.",
    architecture: [
      "React Native frontend with Tailwind CSS",
      "Flask backend with MongoDB database",
      "OpenCV-based OCR pipeline for handwritten text",
      "200K+ medicine database for fast search",
      "AI-driven medical report summarization",
      "Smart medication tracker with automated reminders",
      "IBM Watson chatbot integration",
    ],
    techStack: [
      "React Native",
      "Flask",
      "MongoDB",
      "OpenCV",
      "IBM Watson",
      "Python",
      "Expo",
      "Tailwind CSS",
    ],
    highlights: [
      "Top 25 out of 500 teams at CVMU Hackathon",
      "90%+ OCR accuracy on handwritten prescriptions",
      "200K+ medicine database for drug info, side effects, alternatives",
      "Doctor-sharing feature for medical report analysis",
    ],
    challenges: [
      "Achieving high accuracy on handwritten text recognition",
      "Building a performant medicine search across 200K+ entries",
      "Integrating multiple AI services (OCR, chatbot, report summarization) seamlessly",
    ],
    lessons: [
      "OCR accuracy on handwriting requires careful preprocessing and model fine-tuning",
      "Real-world medical data demands strict validation and accuracy standards",
      "Hackathon constraints force rapid prototyping — good architecture decisions early pay off",
    ],
    futureImprovements: [
      "Multi-language prescription support",
      "Integration with hospital EHR systems",
      "Offline OCR capability",
      "Drug interaction warnings",
    ],
    github: "https://github.com/pruthvi189/Medify",
    category: "ai-ml",
    featured: true,
  },
];
