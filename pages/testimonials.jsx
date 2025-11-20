import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import TestimonialsComponent from '../components/Testimonials';

export default function Testimonials() {
  const { darkMode } = useTheme();

  const testimonials = [
    {
      name: 'Jane Mwangi',
      title: 'CEO of SmartHealth',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      quote:
        'Kevin exceeded our expectations. He delivered a beautiful website ahead of schedule and was great to work with.',
      rating: 5,
    },
    {
      name: 'Brian Ouma',
      title: 'Founder of AfroCart',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote:
        'Professional, responsive, and talented. Kevin built our e-commerce platform from scratch and it runs perfectly.',
      rating: 5,
    },
    {
      name: 'Aisha Kamau',
      title: 'Project Lead at EdTechNow',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote:
        'I highly recommend Kevin. His attention to detail and creative solutions brought our app idea to life.',
      rating: 5,
    },
  ];

  return (
    <div className={darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}>
      <Head>
        <title>Client Testimonials | Kevin Otieno</title>
        <meta
          name="description"
          content="See what clients say about working with Kevin Otieno."
        />
      </Head>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            What My Clients Say
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Feedback from real clients I’ve worked with across various projects.
          </p>

          <TestimonialsComponent testimonials={testimonials} darkMode={darkMode} />

          <div className="text-center mt-12">
            <Link href="/about">
              <button
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition ${
                  darkMode
                    ? 'bg-indigo-700 text-white hover:bg-indigo-600'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Back to About Page
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
