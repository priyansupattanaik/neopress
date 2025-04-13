
import React from 'react';
import Layout from '@/components/Layout';
import FeaturedStory from '@/components/FeaturedStory';
import TrendingTopics from '@/components/TrendingTopics';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

// Sample data for our articles
const featuredStory = {
  title: "The Renaissance of Print Media in a Digital World",
  excerpt: "As digital fatigue sets in, more readers are turning to tangible, print experiences. This growing trend marks a significant shift in how we consume information, with implications for publishers and content creators alike. Experts suggest this isn't merely nostalgia, but a fundamental desire for a more focused, intentional relationship with media.",
  image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop",
  category: "Media",
  author: "Eleanor Rigby",
  date: "April 13, 2025",
  isExclusive: true
};

const articles = [
  {
    id: 1,
    title: "Traditional Craftsmanship Making a Comeback in Modern Design",
    excerpt: "Artisans are finding renewed interest in their handcrafted goods as consumers seek authenticity.",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1170&auto=format&fit=crop",
    category: "Arts",
    author: "Marcus Chen",
    date: "April 12, 2025"
  },
  {
    id: 2,
    title: "The Unexpected Economic Impact of Vintage Fashion Trends",
    excerpt: "Thrift stores and secondhand clothing markets are experiencing unprecedented growth.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1171&auto=format&fit=crop",
    category: "Business",
    author: "Sophia Miller",
    date: "April 11, 2025"
  },
  {
    id: 3,
    title: "Urban Gardens Transform City Landscapes and Communities",
    excerpt: "Residents are reclaiming unused spaces to create green havens and food sources.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1170&auto=format&fit=crop",
    category: "Environment",
    author: "James Wilson",
    date: "April 10, 2025"
  },
  {
    id: 4,
    title: "Rediscovering the Art of Letter Writing in the Digital Age",
    excerpt: "Pen pals and handwritten correspondence are making a surprising comeback among younger generations.",
    image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1169&auto=format&fit=crop",
    category: "Culture",
    author: "Emma Thompson",
    date: "April 9, 2025"
  },
  {
    id: 5,
    title: "The Psychology Behind Our Fascination with Nostalgic Media",
    excerpt: "Research reveals why we're drawn to the aesthetic and emotional qualities of past eras.",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1170&auto=format&fit=crop",
    category: "Science",
    author: "David Park",
    date: "April 8, 2025"
  },
  {
    id: 6,
    title: "Local Libraries Reinvent Themselves as Community Innovation Hubs",
    excerpt: "Beyond books, these institutions are becoming centers for creativity and collaboration.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1170&auto=format&fit=crop",
    category: "Education",
    author: "Olivia Johnson",
    date: "April 7, 2025"
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="container py-8">
        <FeaturedStory {...featuredStory} />
        
        <TrendingTopics />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-serif font-bold text-2xl mb-6 pb-2 border-b border-neopress-gray-300">
              Latest Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
          
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
