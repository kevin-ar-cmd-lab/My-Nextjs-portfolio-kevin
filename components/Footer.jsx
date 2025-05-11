import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <p className="text-4xl font-bold">
      <span className="animate-color-cycle animate-pulse">
  Kevin's Digital WorkSpace
</span>
</p>
         <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
              <li><a href="/skills" className="text-gray-400 hover:text-white transition duration-300">Skills</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/web-development" className="text-gray-400 hover:text-white transition duration-300">Web Development</a></li>
              <li><a href="/mobile-development" className="text-gray-400 hover:text-white transition duration-300">Mobile Development</a></li>
              <li><a href="/ui-ux-design" className="text-gray-400 hover:text-white transition duration-300">UI/UX Design</a></li>
              <li><a href="/consulting" className="text-gray-400 hover:text-white transition duration-300">Consulting</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for updates</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 mt-2">© 2025 Kevin Juma. All rights reserved.</p>
        </div>
      </div>
   </footer>
  );
}
