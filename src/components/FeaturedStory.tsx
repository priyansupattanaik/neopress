
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface FeaturedStoryProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  isExclusive?: boolean;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  isExclusive = false
}) => {
  return (
    <div className="neopress-card overflow-hidden mb-8">
      <div className="relative">
        {isExclusive && (
          <div className="absolute top-4 left-4 z-10">
            <span className="stamp">Exclusive</span>
          </div>
        )}
        <img 
          src={image} 
          alt={title}
          className="w-full h-[300px] md:h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neopress-gray-600">
            {category}
          </span>
          <div className="flex items-center text-neopress-gray-600">
            <Clock className="h-3 w-3 mr-1" />
            <span className="text-xs font-mono">{date}</span>
          </div>
        </div>
        
        <Link to="/article/1">
          <h2 className="neopress-headline text-3xl md:text-4xl lg:text-5xl mb-4 hover:text-neopress-red transition-colors">
            {title}
          </h2>
        </Link>
        
        <p className="drop-cap text-neopress-gray-800 mb-6 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-neopress-gray-300 flex items-center justify-center mr-3">
            <span className="text-neopress-gray-700 font-serif font-bold">
              {author.charAt(0)}
            </span>
          </div>
          <span className="font-serif text-neopress-gray-700">
            By <span className="font-semibold">{author}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
