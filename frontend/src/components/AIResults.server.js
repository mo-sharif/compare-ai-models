import React from 'react';
import { useSpring, animated } from 'react-spring';
import { InfoCircle, Brain } from './Icons';
import PropTypes from 'prop-types';
import { renderSkeletons } from '../utils/renderSkeletons.js';
import { fetchData } from '../utils/fetchData.js';

const googleLogo = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
const byte5Logo = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
const miniLmLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049";

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

const AIResults = ({ data, loading, error }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

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

AIResults.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export const fetchAIResults = async (prompt) => {
  const [flanT5Small, byt5Small, phi2, mt5Small] = await Promise.all([
    fetchData('flanT5Small', prompt),
    fetchData('byt5Small', prompt),
    fetchData('phi2', prompt),
    fetchData('mt5Small', prompt),
  ]);

  return { flanT5Small, byt5Small, phi2, mt5Small };
};

export default AIResults;
