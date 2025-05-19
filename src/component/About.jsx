import React, { useState } from 'react';
import img from './images/f5e884102732761.5f3d3d9493dd6.jpg';

const teamMembers = [
  {
    name: 'Alice',
    role: 'Customer Experience',
    img: 'https://i.pravatar.cc/150?img=10',
    bio: 'Alice ensures every customer leaves with a smile.',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'John',
    role: 'Product Manager',
    img: 'https://i.pravatar.cc/150?img=11',
    bio: 'John brings the best products to our shelves.',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sarah',
    role: 'Marketing Lead',
    img: 'https://i.pravatar.cc/150?img=12',
    bio: 'Sarah spreads the word about our awesome store.',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

const faqs = [
  {
    question: 'What products do you offer?',
    answer: 'We offer a wide range of quality products across multiple categories.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can reach us via the Contact Us button below or email us at support@store.com.',
  },
  {
    question: 'Do you offer free shipping?',
    answer: 'Yes, we offer free shipping on orders over $50.',
  },
];

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Where quality meets affordability. Discover what makes us different.
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-4">About Us</h2>
          <p className="text-gray-600">
            Passionate about making your shopping experience seamless and delightful.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8 space-y-8 animate-fadeIn">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Story</h3>
            <p>
              We started with a goal to make quality products accessible and affordable. Every purchase you make helps us get one step closer to that mission.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
            <p>
              We're committed to delivering value and convenience with every click. Your satisfaction is our top priority.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Integrity & Transparency</li>
              <li>Customer First</li>
              <li>Innovation</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 mb-2">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.socials.twitter} aria-label="Twitter" className="text-blue-400 hover:text-blue-600">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
                  </a>
                  <a href={member.socials.linkedin} aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-xl bg-white shadow-sm">
                <button
                  className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  {faq.question}
                  <span>{openFaq === idx ? '-' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-100 text-blue-900 text-center py-10 px-6 rounded-3xl shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">Subscribe to our Newsletter</h4>
          <p className="mb-6">Get the latest updates, offers, and news straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Call To Action */}
        <div className="bg-primary text-white text-center py-12 px-6 rounded-3xl shadow-lg">
          <h4 className="text-2xl font-semibold mb-2">Have Questions?</h4>
          <p className="mb-6">We're here to help! Reach out and let's chat.</p>
          <a href="/contact">
            <button className="bg-white text-primary font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
