import React from 'react';
import { news } from '../data/mockData';
import { Calendar, Tag, ExternalLink, Clock, User } from 'lucide-react';

const News: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'rankings':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'team news':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'records':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'tournaments':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const publishedDate = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cricket News</h1>
        <p className="text-gray-600">Stay updated with the latest cricket news, analysis, and insights</p>
      </div>

      {/* Featured Article */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow">
        <div className="relative">
          <img 
            src={news[0].image} 
            alt={news[0].title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(news[0].category)}`}>
              <Tag className="h-3 w-3 inline mr-1" />
              {news[0].category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{news[0].title}</h2>
            <div className="flex items-center text-white text-sm space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{getTimeAgo(news[0].publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>Cricket Correspondent</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">{news[0].summary}</p>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium hover:bg-blue-50 px-4 py-2 rounded-lg">
            <span>Read Full Article</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(1).map((article) => (
          <article 
            key={article.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105"
          >
            <div className="relative">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{getTimeAgo(article.publishedAt)}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {article.summary}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-500">
                  <User className="h-3 w-3 mr-1" />
                  <span>Sports Desk</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium flex items-center space-x-1 hover:bg-blue-50 px-3 py-1 rounded">
                  <span>Read More</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default News;