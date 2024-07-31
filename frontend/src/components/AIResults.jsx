import React from "react";
import { useSpring, animated } from "react-spring";
import { InfoCircle, Brain } from "./Icons";

const googleLogo =
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"; // Add your logos to the assets folder
const byte5Logo =
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
const miniLmLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049";

const renderSkeletons = (count) => {
  return Array.from({ length: count }).map((_, index) => (
    <div key={index} className="result-card skeleton">
      <div className="skeleton-logo" />
      <div className="skeleton-text" />
      <div className="skeleton-text" />
      <div className="skeleton-text" />
    </div>
  ));
};

const AIResults = ({ data, loading, error }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const renderResult = (title, logo, result) => (
    <div className="result-card">
      <h3>
        <img src={logo} alt={title} className="logo" /> {title}
      </h3>
      {result?.error ? (
        <div className="flexBox">
          {!result?.estimated_time && result?.error && (
            <>
              <InfoCircle />
              <p className="errorInfo">{result?.error}</p>
            </>
          )}
          {result?.estimated_time && (
            <>
              <Brain />
              <p>ETA: {Math.floor(result?.estimated_time)} seconds</p>
            </>
          )}
        </div>
      ) : (
        <pre>
          {result[0].generated_text}
          {result[0]?.translation_text}
        </pre>
      )}
    </div>
  );

  return (
    <animated.div style={props} className="results">
      {loading && renderSkeletons(4)}
      {error && (
        <p>
          Error: {error.message || "An error occurred while fetching data."}
        </p>
      )}
      {data?.flanT5Small &&
        renderResult("Flan-T5-Small", googleLogo, data.flanT5Small)}
      {data?.byt5Small &&
        renderResult("Byte5-Small", byte5Logo, data.byt5Small)}
      {data?.phi2 && renderResult("Phi-2", miniLmLogo, data.phi2)}
      {data?.mt5Small && renderResult("Mt-5-Small", googleLogo, data.mt5Small)}
    </animated.div>
  );
};

export default AIResults;
