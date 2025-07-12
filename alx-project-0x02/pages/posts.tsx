import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
        <p className="text-gray-600">This is the posts page content.</p>
      </div>
    </div>
  );
};

export default PostsPage;