import React from "react";

export const renderSkeletons = (count) => {
    return Array.from({ length: count }).map((_, index) => (
        <div key={index} className="result-card skeleton">
            <div className="skeleton-logo" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
        </div>
    ));
};