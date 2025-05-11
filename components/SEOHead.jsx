import Head from 'next/head';

export default function SEOHead({ seo = {}, schemaType = 'webpage' }) {
  const {
    title = 'Default Title',
    description = 'Default Description',
    keywords = 'default, keywords',
    image = '/default-image.jpg',
    url = 'https://yourdomain.com',
    datePublished,
    dateModified,
  } = seo;

  let structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };

  if (schemaType === "blog") {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      image,
      author: {
        "@type": "Person",
        name: "Kevin Otieno",
      },
      publisher: {
        "@type": "Organization",
        name: "Kevin Digital Space",
        logo: {
          "@type": "ImageObject",
          url: "https://yourdomain.com/logo.png"
        }
      },
      datePublished: datePublished || "2025-01-01",
      dateModified: dateModified || "2025-01-01",
      url,
    };
  } else if (schemaType === "org") {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Kevin Digital Space",
      url,
      logo: "https://yourdomain.com/logo.png",
      sameAs: [
        "https://www.facebook.com/nomia.otieno",
        "https://github.com/kevin-ar-cmd"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254113094610",
        contactType: "Customer Support"
      }
    };
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
