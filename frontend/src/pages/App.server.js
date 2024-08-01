import React, { useState, Suspense } from 'react';
import PromptInput from '../components/PromptInput.client.js';
import AIResults from '../components/AIResults.server';
import { fetchAIResults } from '../utils/fetchAIResults.js';
import ErrorBoundary from '../components/ErrorBoundary.js'

const App = () => {
  const [data, setData] = useState({});
  const [, setPrompt] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  const handleSubmit = async (prompt) => {
    setData({});
    setError({});
    setPrompt(prompt);
    fetchAIResults(prompt, setData, setLoading, setError);
  };
  console.log(loading)
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Compare AI models</h1>
        <PromptInput onSubmit={handleSubmit} loading={loading} />
        <Suspense fallback={<div>Loading...</div>}>
          <AIResults data={data} loading={loading} error={error} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default App;
