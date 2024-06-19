// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="text-center font-bold">
              <h2 className="text-2xl text-gray-800">Contact Us</h2>
              <p className="mt-2 text-sm text-gray-600">Fill out the form below to get in touch with us.</p>
            </div>
            <form className="mt-6" action="#" method="POST">
              <div className="flex flex-col mb-2">
                <label htmlFor="name" className="text-sm mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required className="py-2 px-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="email" className="text-sm mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@example.com" required className="py-2 px-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="message" className="text-sm mb-2">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Your message..." required className="py-2 px-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg mt-4 transition duration-200">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
