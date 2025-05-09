import React from 'react';
import { motion } from 'framer-motion';
import ResearchCard from './ResearchCard';
import { Research } from '../../types';

interface ResearchGridProps {
  researches: Research[];
  loading?: boolean;
}

const ResearchGrid: React.FC<ResearchGridProps> = ({ researches, loading = false }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={index} 
            className="h-96 animate-pulse bg-background-light rounded-xl"
          ></div>
        ))}
      </div>
    );
  }

  if (researches.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <p className="text-gray-400 text-lg">No research papers found matching your criteria.</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {researches.map((research) => (
        <motion.div key={research.id} variants={item}>
          <ResearchCard research={research} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ResearchGrid;