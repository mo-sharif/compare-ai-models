import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import PromptInput from './components/PromptInput';
import AIResults from './components/AIResults';

const QUERY_SERVICES = gql`
  query QueryServices($inputs: String!) {
    flanT5Small(inputs: $inputs)
    byt5Small(inputs: $inputs)
    phi2(inputs: $inputs)
    mt5Small(inputs: $inputs)
  }
`;

const App = () => {
  const [prompt, setPrompt] = useState("");
  const { data, loading, error, refetch } = useQuery(QUERY_SERVICES, {
    variables: { inputs: prompt },
    skip: !prompt,
  });

  const handleSubmit = (prompt) => {
    setPrompt(prompt)
    refetch({ inputs: prompt });
  };

  return (
    <>
      <div className="App">
        <PromptInput onSubmit={handleSubmit} loading={loading} />
        <AIResults data={data} loading={loading} error={error} />
      </div>
    </>
  );
};

export default App;
