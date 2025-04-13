
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  
  // Extract category from path if not in params
  const pathCategory = !category ? location.pathname.substring(1) : category;
  const formattedCategory = pathCategory.charAt(0).toUpperCase() + pathCategory.slice(1);
  
  const articles = getAllArticles().filter(article => 
    article.category.toLowerCase() === pathCategory.toLowerCase()
  );

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="neopress-headline text-3xl md:text-4xl mb-6 pb-2 border-b border-neopress-gray-300">
          {formattedCategory}
        </h1>
        
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-neopress-gray-700 italic">No articles found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
