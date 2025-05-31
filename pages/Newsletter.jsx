// pages/Newsletter.jsx
import NewsletterForm from '../components/NewsletterForm';

function NewsletterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4 py-12">
      <NewsletterForm />
    </div>
  );
}

// 🚫 Don't use global Layout for this page
NewsletterPage.getLayout = function PageLayout(page) {
  return page;
};

export default NewsletterPage;
