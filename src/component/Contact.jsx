import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-6">
        If you have any questions or need assistance, feel free to contact us using the form below.
      </p>

      <form className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            placeholder="Your message"
            className="border rounded w-full py-2 px-3"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
