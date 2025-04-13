
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  date
}) => {
  return (
    <div className="neopress-card h-full">
      <Link to={`/article/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-white bg-opacity-90 rounded-sm">
              {category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/article/${id}`}>
          <h3 className="font-serif font-bold text-xl mb-2 line-clamp-2 hover:text-neopress-red transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-neopress-gray-700 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs font-mono text-neopress-gray-600">
          <span>{author}</span>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
