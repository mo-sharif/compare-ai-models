'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { InfoCircle, Brain } from './Icons';
import { renderSkeleton } from '../utils/renderSkeletons';

const renderResult = (result) => (
    <>
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
                {result[0]?.generated_text}
                {result[0]?.translation_text}
            </pre>
        )}
    </>
);

const ResultCard = ({ title, logo, loading, error, data }) => {
    return (
        <div className="result-card">
            <h3>
                <img src={logo} alt={title} className="logo" /> {title}
            </h3>
            {loading && renderSkeleton(3)}
            {error && <p>Error: {error}</p>}
            {data && renderResult(data)}
        </div>
    );
};

ResultCard.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    data: PropTypes.object,
};

export default ResultCard;
