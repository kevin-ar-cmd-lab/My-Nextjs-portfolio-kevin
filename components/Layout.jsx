import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import SEOData from './SEOData';
import FitToScreenLayout from './FitToScreenLayout';

export default function Layout({ children }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const normalizedRoute = currentRoute.toLowerCase();

  const defaultSEO = {
    title: "Default Title",
    description: "Default Description",
    keywords: "default, keywords",
    image: "/default-image.jpg",
    url: "https://yourdomain.com",
  };

  const seoData = SEOData[normalizedRoute] || defaultSEO;

  if (process.env.NODE_ENV === 'development' && !SEOData[normalizedRoute]) {
    console.warn(`Warning: No SEO data found for route: "${normalizedRoute}"`);
  }

  const routeSchemaMap = {
    "/": "org",
    "/about": "org",
    "/contact": "org",
    "/blog": "blog",
    "/projects": "webpage",
    "/testimonials": "webpage",
  };

  const schemaType = routeSchemaMap[normalizedRoute] || "webpage";

  return (
    <>
      <SEOHead seo={seoData} schemaType={schemaType} />
      <FitToScreenLayout
        header={<Navbar />}
        footer={<Footer />}
      >
        <main className="flex-grow pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          {children}
        </main>
      </FitToScreenLayout>
    </>
  );
}
