
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { getArticleById, getRelatedArticles } from '@/lib/articles';
import ArticleCard from './ArticleCard';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(Number(id));
  const relatedArticles = getRelatedArticles(Number(id));

  if (!article) {
    return (
      <Layout>
        <div className="container py-8 text-center">
          <h1 className="text-2xl font-serif mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="inline-block stamp">
            Return to Homepage
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <Link to={`/category/${article.category.toLowerCase()}`} className="flex items-center text-neopress-gray-700 mb-6 hover:text-neopress-red transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to {article.category}</span>
        </Link>

        <div className="neopress-card p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neopress-gray-600">
              {article.category}
            </span>
            <div className="flex items-center text-neopress-gray-600">
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs font-mono">{article.date}</span>
            </div>
          </div>
          
          <h1 className="neopress-headline text-3xl md:text-4xl lg:text-5xl mb-6">
            {article.title}
          </h1>
          
          <div className="mb-8">
            <div className="relative mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[300px] md:h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-neopress-gray-300 flex items-center justify-center mr-3">
                <span className="text-neopress-gray-700 font-serif font-bold">
                  {article.author.charAt(0)}
                </span>
              </div>
              <span className="font-serif text-neopress-gray-700">
                By <span className="font-semibold">{article.author}</span>
              </span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="drop-cap text-neopress-gray-800 mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-neopress-gray-800 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {relatedArticles.length > 0 && (
          <div className="mb-8">
            <h2 className="font-serif font-bold text-2xl mb-6 pb-2 border-b border-neopress-gray-300">
              Related Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticleDetail;
