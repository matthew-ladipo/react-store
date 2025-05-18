import React from 'react';
import img from './images/f5e884102732761.5f3d3d9493dd6.jpg'

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[60vh] flex items-center justify-center" style={{ backgroundImage: `url${img}` }}>
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg max-w-2xl mx-auto">Where quality meets affordability. Discover what makes us different.</p>
        </div>
      </div>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-4">About Us</h2>
          <p className="text-gray-600">Passionate about making your shopping experience seamless and delightful.</p>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8 space-y-8 animate-fadeIn">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Story</h3>
            <p>We started with a goal to make quality products accessible and affordable. Every purchase you make helps us get one step closer to that mission.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
            <p>We're committed to delivering value and convenience with every click. Your satisfaction is our top priority.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Team</h3>
            <p>Meet our team of creative, customer-centric professionals making magic behind the scenes every day.</p>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {['Alice', 'John', 'Sarah'].map((name, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center">
                <img
                  src={`https://i.pravatar.cc/150?img=${idx + 10}`}
                  alt={name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-500">Customer Experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-primary text-white text-center py-12 px-6 rounded-3xl shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">Have Questions?</h4>
          <p className="mb-6">We're here to help! Reach out and let's chat.</p>
          <button className="bg-white text-primary font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
