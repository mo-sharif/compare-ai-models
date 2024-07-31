import React, { useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";

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
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </animated.div>
  );
};

export default PromptInput;
