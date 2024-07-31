'use client';

import React, { useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from 'prop-types';

const PromptInput = ({ onSubmit, loading }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [userPrompt, setUserPrompt] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(userPrompt);
    },
    [userPrompt, onSubmit]
  );

  const isAnyLoading = Object.values(loading).some(isLoading => isLoading);

  return (
    <animated.div style={props} className="card">
      <h2>Enter a Prompt</h2>
      <form>
        <textarea
          name="userPrompt"
          placeholder="Type your prompt here..."
          rows="4"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        ></textarea>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={isAnyLoading}
        >
          {isAnyLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </animated.div>
  );
};

PromptInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PromptInput;
