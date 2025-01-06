import React from 'react';
import BusinessCardGrid from './BusinessCardGrid';
import { MOCK_BUSINESSES } from '../data/mockBusinesses';

export default function NewBusinesses() {
  const newBusinesses = MOCK_BUSINESSES.slice(-8);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BusinessCardGrid 
          businesses={newBusinesses} 
          title="New to Glow360"
          scrollable={true}
        />
      </div>
    </section>
  );
}
