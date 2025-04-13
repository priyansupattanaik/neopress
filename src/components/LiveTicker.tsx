
import React from 'react';

const newsItems = [
  "Breaking: Local cafe introduces typewriter-themed workspace",
  "Markets rise as vintage tech stocks surge",
  "New study shows benefits of paper-based reading",
  "Weather: Expect scattered showers with periods of sunshine",
  "Sports: Classic car rally draws record attendance",
  "Science: Researchers develop eco-friendly ink alternatives",
  "Arts: Exhibition celebrating print media opens downtown"
];

export const LiveTicker = () => {
  return (
    <div className="bg-neopress-gray-100 border-t border-b border-neopress-gray-300 py-1 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-tape flex">
          {newsItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="px-4 font-mono text-sm text-neopress-gray-700">
                {item}
              </span>
              <span className="text-neopress-red font-bold px-2">•</span>
            </React.Fragment>
          ))}
          {newsItems.map((item, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span className="px-4 font-mono text-sm text-neopress-gray-700">
                {item}
              </span>
              <span className="text-neopress-red font-bold px-2">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
