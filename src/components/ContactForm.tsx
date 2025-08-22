/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/ContactForm.tsx
import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntd6uwm", // Replace with your EmailJS Service ID
        "template_7jhfy0k", // Replace with your EmailJS Template ID
        e.currentTarget,
        "BWAhNgMEjZIygQE7t" // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    // <form onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
    //   <input
    //     type="text"
    //     name="name"
    //     required
    //     placeholder="Your Name"
    //     className="w-full border p-2"
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     required
    //     placeholder="Your Email"
    //     className="w-full border p-2"
    //   />
    //   <textarea
    //     name="message"
    //     required
    //     placeholder="Your Message"
    //     className="w-full border p-2"
    //   ></textarea>
    //   <button
    //     type="submit"
    //     className="bg-blue-500 text-white px-4 py-2 rounded"
    //   >
    //     Send Message
    //   </button>
    // </form>
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold w-20">Name:</span>
                  <span>Arati Ekatpure</span>
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold w-20">Address:</span>
                  <span>Pandharpur, Maharashtra 413310</span>
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold w-20">Email:</span>
                  <a
                    href="mailto:ekatpurearati18@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ekatpurearati18@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Send Message
              </h3>
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message..."
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0f172a] text-white py-2 px-4 rounded-lg hover:bg-[#1e3a8a] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
