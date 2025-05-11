import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Custom404() {
  useEffect(() => {
    // Redirect after 3 seconds or directly based on your requirement
    setTimeout(() => {
      const redirectTo = location.pathname.replace(/^\/Kevins-Digital-WorkSpace/, '');
      location.replace(`/Kevins-Digital-WorkSpace/index.html?redirect=${encodeURIComponent(redirectTo)}`);
    }, 3000); // Delay of 3 seconds for user to see the message before redirect
  }, []);

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
        <Link href="/">
          <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition">
            Go Back Home
          </span>
        </Link>
        <p className="mt-4 text-gray-500">Redirecting you in 3 seconds...</p>
      </main>
    </>
  );
}
