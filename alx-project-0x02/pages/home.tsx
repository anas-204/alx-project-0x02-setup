import React from 'react';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <Header/>
      <h1 className="text-3xl font-bold mb-8 text-center">Card Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="First Card" 
          content="This is the content for the first card component." 
        />
        
        <Card 
          title="Second Card" 
          content="Different content for the second card component."
          className="bg-blue-50" 
        />
        
        <Card 
          title="Third Card" 
          content="Yet another card with different content to demonstrate reusability."
          className="border-2 border-green-200"
        />
      </div>
    </div>
  );
};

export default HomePage;