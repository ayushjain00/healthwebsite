import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Download, Lock, Calendar, User, Tag } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Research } from '../../types';

interface ResearchCardProps {
  research: Research;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(date));
  };

  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Card variant="hover" className="h-full flex flex-col overflow-hidden">
      {research.coverImage ? (
        <div 
          className="h-48 bg-cover bg-center rounded-t-lg relative" 
          style={{ backgroundImage: `url(${research.coverImage})` }}
        >
          {research.isPremium && (
            <div className="absolute top-0 right-0 m-2">
              <Badge variant="secondary" size="md">
                <Lock size={12} className="mr-1" /> Premium
              </Badge>
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-r from-background-light via-background-lighter to-background-light rounded-t-lg flex items-center justify-center relative">
          {research.isPremium && (
            <div className="absolute top-0 right-0 m-2">
              <Badge variant="secondary" size="md">
                <Lock size={12} className="mr-1" /> Premium
              </Badge>
            </div>
          )}
          <span className="text-2xl font-heading text-gray-600">
            {research.title.charAt(0)}
          </span>
        </div>
      )}
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className="font-heading text-lg font-medium text-white mb-2">
            {truncate(research.title, 70)}
          </h3>
        </div>
        
        <p className="text-gray-400 text-sm mb-4">
          {truncate(research.abstract, 120)}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {research.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'accent' : 'gray'}>
              {tag}
            </Badge>
          ))}
          {research.tags.length > 3 && (
            <Badge variant="gray">+{research.tags.length - 3}</Badge>
          )}
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center text-gray-400 text-xs mb-4">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              {formatDate(research.uploadDate)}
            </div>
            <div className="flex items-center mr-4">
              <User size={14} className="mr-1" />
              {research.author.name}
            </div>
            <div className="flex items-center">
              <Tag size={14} className="mr-1" />
              {research.field}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center">
                <Eye size={14} className="mr-1" />
                {research.views}
              </div>
              <div className="flex items-center">
                <Download size={14} className="mr-1" />
                {research.downloads}
              </div>
            </div>
            <Link to={`/research/${research.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResearchCard;