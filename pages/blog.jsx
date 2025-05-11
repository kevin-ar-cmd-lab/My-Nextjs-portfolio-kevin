import Head from 'next/head';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of Web Development',
      image: 'https://via.placeholder.com/800x400',
      description: 'Explore the latest trends in web development, including JAMstack, serverless, and more.',
      link: '#',
    },
    {
      title: 'Understanding Tailwind CSS',
      image: 'https://via.placeholder.com/800x400',
      description: 'A comprehensive guide to Tailwind CSS and how it can simplify your styling workflow.',
      link: '#',
    },
    {
      title: 'Next.js: The React Framework for Production',
      image: 'https://via.placeholder.com/800x400',
      description: 'Why Next.js is the perfect choice for building modern, scalable web applications.',
      link: '#',
    },
  ];

  return (
    <>
      <Head>
        <title>Blog | Kevin's Digital Space</title>
      </Head>
      <main className="container mx-auto p-4 mt-16">
        <h1 className="text-4xl font-bold text-center my-8">My Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <a
                  href={post.link}
                  className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block font-medium"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
