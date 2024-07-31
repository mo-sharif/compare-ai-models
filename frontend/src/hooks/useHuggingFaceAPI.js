import { useState, useEffect } from 'react';
import { useApolloClient, gql } from '@apollo/client';

const FETCH_DATA = gql`
  query FetchData($prompt: String!) {
    flanT5Small(prompt: $prompt) {
      result
      error
    }
    byte5Small(prompt: $prompt) {
      result
      error
    }
    phi2(prompt: $prompt) {
      result
      error
    }
    mt5Small(prompt: $prompt) {
      result
      error
    }
  }
`;

const useHuggingFaceAPI = (prompt) => {
  const client = useApolloClient();
  const [data, setData] = useState({ byte5small: null, flanT5Small: null, phi2: null, mt5Small: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!prompt) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await client.query({
          query: FETCH_DATA,
          variables: { prompt },
        });

        setData({
          byte5small: data.byte5Small,
          flanT5Small: data.flanT5Small,
          phi2: data.phi2,
          mt5Small: data.mt5Small
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prompt, client]);

  return { data, loading, error };
};

export default useHuggingFaceAPI;
