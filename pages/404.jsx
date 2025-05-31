import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup if unmounted early
  }, [router]);

  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Oops! The page you're looking for does not exist.
        </p>
        <span
          onClick={() => router.push('/')}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
        >
          Go Back Home
        </span>
        <p className="mt-4 text-gray-500">Redirecting you in 3 seconds...</p>
      </main>
    </>
  );
}
