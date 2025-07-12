import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
        <Header/>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
            <div className="flex items-center gap-4">
              <Button size="small">Small Button</Button>
              <Button size="medium">Medium Button</Button>
              <Button size="large">Large Button</Button>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Shape Variants</h2>
            <div className="flex items-center gap-4">
              <Button shape="rounded-sm">Sharp Corners</Button>
              <Button shape="rounded-md">Default Rounded</Button>
              <Button shape="rounded-full">Pill Shape</Button>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Combinations</h2>
            <div className="flex items-center gap-4 flex-wrap">
              <Button size="small" shape="rounded-full">
                Small Pill
              </Button>
              <Button size="large" shape="rounded-sm">
                Large Sharp
              </Button>
              <Button 
                size="medium" 
                shape="rounded-full" 
                className="bg-green-600 hover:bg-green-700"
              >
                Custom Color
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;