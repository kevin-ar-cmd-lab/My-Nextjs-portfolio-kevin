import Head from 'next/head';
import Link from 'next/link';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import Testimonials from '../components/Testimonials';

export default function About() {
  const { darkMode } = useTheme();

  const sectionClass = `${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-8 rounded-lg shadow mb-16`;
  const cardClass = `${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow hover:shadow-lg transition`;

  return (
    <div>
      <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-16`}>
        <div className="container mx-auto px-6">

          {/* About Me Section */}
          <section className={sectionClass}>
            <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-center">
              I specialize in creating modern web applications with a strong focus on user experience,
              clean code, and performance. With a passion for both frontend and backend technologies,
              I strive to build responsive, scalable, and secure applications.
            </p>
          </section>

          {/* Skills Section */}
          <section className={sectionClass}>
            <h2 className="text-3xl font-bold text-center mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className={cardClass}>
                <FaReact className="text-4xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">React</h3>
              </div>
              <div className={cardClass}>
                <FaNodeJs className="text-4xl text-green-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">Node.js</h3>
              </div>
              <div className={cardClass}>
                <FaHtml5 className="text-4xl text-orange-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">HTML5</h3>
              </div>
              <div className={cardClass}>
                <FaCss3Alt className="text-4xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">CSS3</h3>
              </div>
              <div className={cardClass}>
                <FaGitAlt className="text-4xl text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">Git</h3>
              </div>
              <div className={cardClass}>
                <FaDatabase className="text-4xl text-teal-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">Database</h3>
              </div>
              <div className={cardClass}>
                <FaMobileAlt className="text-4xl text-indigo-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">Mobile Development</h3>
              </div>
              <div className={cardClass}>
                <FaCloud className="text-4xl text-gray-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">Cloud</h3>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className={sectionClass}>
            <h2 className="text-3xl font-bold text-center mb-4">My Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-center">
              I have worked on a wide range of projects, from small startups to large enterprise solutions,
              helping companies build powerful web and mobile applications. My experience spans multiple industries,
              including e-commerce, healthcare, and education.
            </p>
            <div className="text-center mt-8">
              <Link href="/testimonials#testimonials">
                <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
                  View Client Testimonials
                </button>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className={sectionClass}>
            <h2 className="text-3xl font-bold text-center mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-center">
              I'm always open to discussing new opportunities and collaborating on exciting projects. Feel free to reach out!
            </p>
            <div className="text-center mt-6">
              <Link href="mailto:otienokevino100090@gmail.com">
                <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
                  Send an Email
                </button>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
