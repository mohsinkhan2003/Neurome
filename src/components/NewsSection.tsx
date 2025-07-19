import React from 'react';
import { NewsItem } from '../types/cricket';
import { Calendar, Tag, ExternalLink } from 'lucide-react';

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'rankings':
        return 'bg-blue-100 text-blue-800';
      case 'team news':
        return 'bg-green-100 text-green-800';
      case 'records':
        return 'bg-purple-100 text-purple-800';
      case 'tournaments':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Latest Cricket News</h2>
      
      <div className="space-y-6">
        {news.map((article) => (
          <article 
            key={article.id} 
            className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0 hover:bg-gray-50 transition-colors p-4 rounded-lg"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 md:h-32 object-cover rounded-lg"
                />
              </div>
              
              <div className="md:w-2/3 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    <Tag className="h-3 w-3 inline mr-1" />
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(article.publishedAt)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium flex items-center space-x-1">
                    <span>Read More</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;