import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ALX Next.js Project</title>
        <meta name="description" content="Next.js Basics" />
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to ALX Project 2!
        </h1>
        <p className="mt-4 text-gray-600">
          This is a Next.js project with TypeScript, ESLint, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}