import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Badge from '../ui/Badge';
import { ResearchFilters as FilterTypes } from '../../types';

interface ResearchFiltersProps {
  onFilterChange: (filters: FilterTypes) => void;
  availableFields: string[];
  availableTags: string[];
}

const ResearchFilters: React.FC<ResearchFiltersProps> = ({
  onFilterChange,
  availableFields,
  availableTags,
}) => {
  const [filters, setFilters] = useState<FilterTypes>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, field: value || undefined }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'newest' | 'oldest' | '';
    setFilters((prev) => ({ ...prev, date: value || undefined }));
  };

  const handlePremiumChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      premium: value === 'true' ? true : value === 'false' ? false : undefined,
    }));
  };

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    setFilters((prev) => ({
      ...prev,
      tags: newSelectedTags.length > 0 ? newSelectedTags : undefined,
    }));
  };

  const resetFilters = () => {
    setFilters({});
    setSelectedTags([]);
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <motion.div 
          className="flex-grow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Input
            type="text"
            placeholder="Search by title, author, or keywords..."
            value={filters.search || ''}
            onChange={handleSearchChange}
            leftIcon={<Search size={18} className="text-gray-400" />}
            fullWidth
          />
        </motion.div>
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          leftIcon={<Filter size={18} />}
        >
          {isExpanded ? 'Hide Filters' : 'Show Filters'}
        </Button>
        <Button variant="primary" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background-light p-4 rounded-lg border border-gray-700 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Research Field
                </label>
                <select
                  className="w-full bg-background-lighter text-gray-200 border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  value={filters.field || ''}
                  onChange={handleFieldChange}
                >
                  <option value="">All Fields</option>
                  {availableFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sort By Date
                </label>
                <select
                  className="w-full bg-background-lighter text-gray-200 border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  value={filters.date || ''}
                  onChange={handleDateChange}
                >
                  <option value="">Default</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Access Type
                </label>
                <select
                  className="w-full bg-background-lighter text-gray-200 border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                  value={
                    filters.premium === undefined
                      ? ''
                      : filters.premium
                      ? 'true'
                      : 'false'
                  }
                  onChange={handlePremiumChange}
                >
                  <option value="">All</option>
                  <option value="false">Free Access</option>
                  <option value="true">Premium Only</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags
              </label>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {availableTags.map((tag) => (
                  <motion.div
                    key={tag}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                  >
                    <Badge
                      variant={selectedTags.includes(tag) ? 'primary' : 'gray'}
                      className={`cursor-pointer ${
                        selectedTags.includes(tag) ? 'border-primary-500' : ''
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                leftIcon={<X size={14} />}
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResearchFilters;