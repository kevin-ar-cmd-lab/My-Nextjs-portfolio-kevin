import React from 'react';

const Testimonials = ({ testimonials }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return [...Array(5)].map((_, i) => {
      if (i < fullStars) return <i key={i} className="fas fa-star text-yellow-400"></i>;
      if (i === fullStars && hasHalfStar) return <i key={i} className="fas fa-star-half-alt text-yellow-400"></i>;
      return <i key={i} className="far fa-star text-gray-300"></i>;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
          <p className="text-gray-600 mb-3">"{t.feedback}"</p>
          <div className="flex">{renderStars(t.rating)}</div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
