import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import ResultCard from './ResultCard.client';
import config from "../config";

const AIResults = ({ data, loading, error }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="results">
      {config.services.map((service) => (
        <ResultCard
          key={service.name}
          title={service.title}
          logo={service.logo}
          loading={loading[service.name]}
          error={error?.[service.name]}
          data={data?.[service.name]}
        />
      ))}
    </animated.div>
  );
};

AIResults.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default AIResults;
