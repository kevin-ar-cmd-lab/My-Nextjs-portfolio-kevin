import Head from 'next/head';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Mwangi',
      title: 'CEO of SmartHealth',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      quote:
        'Kevin exceeded our expectations. He delivered a beautiful website ahead of schedule and was great to work with.',
    },
    {
      name: 'Brian Ouma',
      title: 'Founder of AfroCart',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote:
        'Professional, responsive, and talented. Kevin built our e-commerce platform from scratch and it runs perfectly.',
    },
    {
      name: 'Aisha Kamau',
      title: 'Project Lead at EdTechNow',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote:
        'I highly recommend Kevin. His attention to detail and creative solutions brought our app idea to life.',
    },
  ];

  return (
    <>
      <Head>
        <title>Client Testimonials | Kevin Otieno</title>
        <meta
          name="description"
          content="See what clients say about working with Kevin Otieno."
        />
      </Head>

      <section
        id="testimonials"
        className="bg-gray-50 py-20 px-6 animate-fade-in"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            What My Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Feedback from real clients I’ve worked with across various projects.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl animate-scale-in"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-indigo-600"
                />
                <p className="text-gray-700 mb-4 italic">“{t.quote}”</p>
                <div className="flex justify-center mb-2">
                  {/* Star Rating */}
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.148 3.537a1 1 0 00.95.69h3.708c.969 0 1.371 1.24.588 1.81l-3 2.18a1 1 0 00-.364 1.118l1.148 3.537c.3.921-.755 1.688-1.54 1.118l-3-2.18a1 1 0 00-1.176 0l-3 2.18c-.785.57-1.84-.197-1.54-1.118l1.148-3.537a1 1 0 00-.364-1.118l-3-2.18c-.783-.57-.38-1.81.588-1.81h3.708a1 1 0 00.95-.69l1.148-3.537z" />
                    </svg>
                  ))}
                </div>
                <h4 className="font-semibold text-indigo-600">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.title}</span>
              </div>
            ))}
          </div>

          {/* Back to About Button */}
          <div className="text-center mt-12">
            <Link href="/about">
              <button className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition">
                Back to About Page
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
