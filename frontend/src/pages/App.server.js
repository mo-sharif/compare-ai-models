import React, { useState, Suspense } from 'react';
import PromptInput from '../components/PromptInput.client.js';
import AIResults, { fetchAIResults } from '../components/AIResults.server';
import ErrorBoundary from '../components/ErrorBoundary.js'

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (prompt) => {
    setLoading(true);
    setError(null);

    try {
      const results = await fetchAIResults(prompt);
      setData(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ErrorBoundary>
      <div className="App">
        <PromptInput onSubmit={handleSubmit} loading={loading} />
        <Suspense fallback={<div>Loading...</div>}>
          <AIResults data={data} loading={loading} error={error} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default App;
