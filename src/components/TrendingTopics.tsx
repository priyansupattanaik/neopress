
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

const topics = [
  { id: 1, name: 'Technology', count: 24 },
  { id: 2, name: 'Politics', count: 18 },
  { id: 3, name: 'Science', count: 12 },
  { id: 4, name: 'Arts', count: 9 },
  { id: 5, name: 'Business', count: 15 },
  { id: 6, name: 'Health', count: 11 },
  { id: 7, name: 'Sports', count: 20 },
  { id: 8, name: 'Environment', count: 8 }
];

const TrendingTopics = () => {
  return (
    <div className="py-6 border-y border-neopress-gray-300 mb-8">
      <div className="container">
        <div className="flex items-center mb-4">
          <Flame className="w-5 h-5 text-neopress-red mr-2" />
          <h3 className="font-serif font-bold text-lg">Trending Topics</h3>
        </div>
        
        <div className="flex overflow-x-auto pb-4 gap-3 hide-scrollbar">
          {topics.map((topic) => (
            <Link 
              key={topic.id}
              to={`/category/${topic.name.toLowerCase()}`}
              className="flex-shrink-0"
            >
              <div className="stamp bg-white hover:bg-neopress-paperDark transition-colors">
                {topic.name} <span className="ml-1 text-neopress-gray-700">({topic.count})</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
