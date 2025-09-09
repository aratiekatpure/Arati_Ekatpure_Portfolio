import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_ntd6uwm", // ✅ Your EmailJS Service ID
        "template_7jhfy0k", // ✅ Your EmailJS Template ID
        formRef.current, // ✅ Pass the form reference
        "BWAhNgMEjZIygQE7t" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset(); // reset form after sending
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
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

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Send Message
              </h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name" // ✅ Must match {{name}} in EmailJS template
                    placeholder="Name"
                    required
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email" // ✅ Must match {{email}} in EmailJS template
                    placeholder="Email"
                    required
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject" // Optional
                    placeholder="Subject"
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <div>
                  <textarea
                    name="message" // ✅ Must match {{message}} in EmailJS template
                    placeholder="Message..."
                    required
                    className="border border-gray-300 p-2 w-full rounded h-32"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-4 py-2 rounded w-full hover:bg-blue-600 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
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
