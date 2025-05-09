import React, { useState, useEffect } from 'react';
import ResearchFilters from '../components/research/ResearchFilters';
import ResearchGrid from '../components/research/ResearchGrid';
import { Research, ResearchFilters as FilterTypes } from '../types';
import { mockResearches } from '../mocks/researchData';

const ExplorePage: React.FC = () => {
  const [researches, setResearches] = useState<Research[]>([]);
  const [filteredResearches, setFilteredResearches] = useState<Research[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<FilterTypes>({});

  // Extract unique fields and tags from research data
  const availableFields = Array.from(new Set(mockResearches.map(r => r.field)));
  const availableTags = Array.from(
    new Set(mockResearches.flatMap(r => r.tags))
  ).sort();

  useEffect(() => {
    // Simulate API call
    const fetchResearches = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResearches(mockResearches);
      setFilteredResearches(mockResearches);
      setLoading(false);
    };

    fetchResearches();
  }, []);

  const applyFilters = (filters: FilterTypes) => {
    setActiveFilters(filters);
    
    let filtered = [...researches];
    
    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchLower) ||
          r.abstract.toLowerCase().includes(searchLower) ||
          r.author.name.toLowerCase().includes(searchLower) ||
          r.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply field filter
    if (filters.field) {
      filtered = filtered.filter((r) => r.field === filters.field);
    }
    
    // Apply tags filter
    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter((r) =>
        filters.tags!.some((tag) => r.tags.includes(tag))
      );
    }
    
    // Apply premium filter
    if (filters.premium !== undefined) {
      filtered = filtered.filter((r) => r.isPremium === filters.premium);
    }
    
    // Apply date sorting
    if (filters.date) {
      filtered.sort((a, b) => {
        if (filters.date === 'newest') {
          return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
        } else {
          return new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime();
        }
      });
    }
    
    setFilteredResearches(filtered);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Explore Research
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking research papers and datasets from top researchers around the world.
          </p>
        </div>

        <ResearchFilters
          onFilterChange={applyFilters}
          availableFields={availableFields}
          availableTags={availableTags}
        />

        <ResearchGrid researches={filteredResearches} loading={loading} />
      </div>
    </div>
  );
};

export default ExplorePage;