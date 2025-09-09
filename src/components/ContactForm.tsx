/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/ContactForm.tsx
import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntd6uwm", // ✅ Your EmailJS Service ID
        "template_7jhfy0k", // ✅ Your EmailJS Template ID
        e.currentTarget, // ✅ Pass the form
        "BWAhNgMEjZIygQE7t" // ✅ Your Public Key
      )
      .then(
        () => {
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

            {/* ✅ The actual form */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Send Message
              </h3>
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="..."
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="..."
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    required
                    className="..."
                  />
                </div>
                <button type="submit" className="...">
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
