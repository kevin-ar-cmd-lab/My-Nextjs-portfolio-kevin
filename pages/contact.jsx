// pages/contact.jsx
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  // Card component inlined
  const Card = ({ title, icon, color, description, link, linkText }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
      <h3 className={`text-2xl font-semibold mb-2 flex items-center ${color}`}>
        <FontAwesomeIcon icon={icon} className="mr-2 text-xl" /> {title}
      </h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {linkText}
      </a>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Contact | Kevin's Digital Space</title>
        <meta
          name="description"
          content="Reach out to Kevin via WhatsApp, Phone, Facebook, GitHub, Email, or Blog."
        />
      </Head>

      <main className="font-sans text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 px-4 py-10">
        <section>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-blue-600 dark:text-blue-400">
              Contact Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                title="WhatsApp"
                icon={faWhatsapp}
                color="text-green-500"
                description="Chat with me instantly on WhatsApp."
                link="https://wa.me/254113094610"
                linkText="Message Me"
              />

              <Card
                title="Phone Call"
                icon={faPhoneAlt}
                color="text-blue-500"
                description="Feel free to call me directly."
                link="tel:+254113094610"
                linkText="Call Now"
              />

              <Card
                title="Facebook"
                icon={faFacebookF}
                color="text-blue-700"
                description="Connect with me on Facebook."
                link="https://www.facebook.com/nomia.otieno"
                linkText="Visit Profile"
              />

              <Card
                title="GitHub"
                icon={faGithub}
                color="text-gray-800 dark:text-gray-200"
                description="Check out my projects and contributions."
                link="https://github.com/kevin-ar-cmd-lab"
                linkText="View GitHub"
              />

              <Card
                title="Email"
                icon={faEnvelope}
                color="text-red-500"
                description="Send me an email anytime."
                link="mailto:otienokevino100090@gmail.com"
                linkText="Send Email"
              />

              <Card
                title="Blog"
                icon={faBlog}
                color="text-pink-600"
                description="Read my latest posts and insights."
                link="https://kevin-juma.blogspot.com/?m=1"
                linkText="Visit Blog"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
