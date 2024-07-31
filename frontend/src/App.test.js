import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App, { QUERY_SERVICES } from './App';

// Mock response for the GraphQL query
const mocks = [
  {
    request: {
      query: QUERY_SERVICES,
      variables: {
        inputs: 'test prompt',
      },
    },
    result: {
      data: {
        flanT5Small: 'Mocked flanT5Small response',
        byt5Small: 'Mocked byt5Small response',
        phi2: 'Mocked phi2 response',
        mt5Small: 'Mocked mt5Small response',
      },
    },
  },
];

test('renders PromptInput and AIResults components', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  // Check that PromptInput is rendered
  expect(screen.getByPlaceholderText('Type your prompt here...')).toBeInTheDocument();

  // Simulate user typing a prompt and submitting
  fireEvent.change(screen.getByPlaceholderText('Type your prompt here...'), { target: { value: 'test prompt' } });
  fireEvent.click(screen.getByText('Submit'));

  // Wait for loading indicator to appear
  await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());

  // Wait for the data to be loaded
  await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

  // Check that AIResults displays the mocked responses
  expect(screen.getByText('Mocked flanT5Small response')).toBeInTheDocument();
  expect(screen.getByText('Mocked byt5Small response')).toBeInTheDocument();
  expect(screen.getByText('Mocked phi2 response')).toBeInTheDocument();
  expect(screen.getByText('Mocked mt5Small response')).toBeInTheDocument();
});
