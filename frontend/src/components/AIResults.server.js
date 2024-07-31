import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import ResultCard from './ResultCard.client';

const googleLogo = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
const byte5Logo = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
const miniLmLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049";

const services = [
  { name: 'flanT5Small', title: 'Flan-T5-Small', logo: googleLogo },
  { name: 'byt5Small', title: 'Byte5-Small', logo: byte5Logo },
  { name: 'phi2', title: 'Phi-2', logo: miniLmLogo },
  { name: 'mt5Small', title: 'Mt-5-Small', logo: googleLogo },
];

const AIResults = ({ data, loading, error }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="results">
      {services.map((service) => (
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
