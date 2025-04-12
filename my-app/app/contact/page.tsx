"use client";
import React, { useState, useEffect, FormEvent } from 'react';
import Navigation from '@/app/component/navbar';
import Emailjs from "emailjs-com";

interface FormStatus {
  type: 'success' | 'error';
  message: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface QuickFormData {
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [quickFormData, setQuickFormData] = useState<QuickFormData>({
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [quickFormStatus, setQuickFormStatus] = useState<FormStatus | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleQuickFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuickFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: 'Please fill in all required fields.' });
      return;
    }
    
    // EmailJS send
    Emailjs.sendForm(
      "service_4az7ysa",
      "template_d1niydb",
      e.currentTarget,
      "qwBmnwbDFtO90EpIx"
    )
      .then((result) => {
        console.log('Form submitted:', formData);
        setFormStatus({ type: 'success', message: 'Thank you for your message! We will contact you soon.' });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setFormStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
      });
  };
  
  const handleQuickSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!quickFormData.email || !quickFormData.message) {
      setQuickFormStatus({ type: 'error', message: 'Email and message are required.' });
      return;
    }
    
    // EmailJS send
    Emailjs.sendForm(
      "service_vwjn1gz",
      "template_0sbyirj",
      e.currentTarget,
      "GzTIiLa0Fh-2M4oos"
    )
      .then((result) => {
        console.log('Quick form submitted:', quickFormData);
        setQuickFormStatus({ type: 'success', message: 'Message sent successfully!' });
        setQuickFormData({
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setQuickFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">Contact Us</h1>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions about our products or services.
          </p>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Store Location */}
            <div className="bg-indigo-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">Visit Our Store</h3>
              <p className="text-black ">
                123 Jewelry Lane<br />
                Gemstone City, GS 12345<br />
                <span className="block mt-2 font-medium">Hours:</span>
                Monday - Saturday: 10AM - 8PM<br />
                Sunday: 12PM - 5PM
              </p>
            </div>

            {/* Phone Contact */}
            <div className="bg-indigo-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">Call Us</h3>
              <p className="text-black ">
                Main: (555) 123-4567<br />
                Customer Service: (555) 987-6543<br />
                <span className="block mt-2 font-medium">Business Hours:</span>
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM
              </p>
            </div>

            {/* Email Contact */}
            <div className="bg-indigo-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">Email Us</h3>
              <p className="text-black">
                General Inquiries:<br />
                info@meerajewlers.com<br />
                <span className="block mt-2">Custom Orders:</span>
                custom@meerajewelers.com<br />
                <span className="block mt-2">Customer Support:</span>
                support@meersjewelers.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-indigo-700 max-w-2xl mx-auto">
              Find quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What are your store hours?",
                answer: "Our store is open Monday through Saturday from 10AM to 8PM, and Sunday from 12PM to 5PM."
              },
              {
                question: "Do you offer jewelry repair services?",
                answer: "Yes, we provide comprehensive repair services including stone replacement, ring resizing, chain repair, and polishing."
              },
              {
                question: "Can I book an appointment for a custom design consultation?",
                answer: "Absolutely! You can schedule a consultation by filling out our contact form or calling us directly."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, cash, and bank transfers. For custom orders, we may require a deposit."
              }
            ].map((item, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-900">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Contact Form Section*/}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-indigo-900 mb-4">Get in Touch</h2>
                <p className="text-indigo-700 mb-6">
                  Have a quick question? Send us a message and we'll get back to you promptly.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-black">845648654</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-black">info@meerajewelers.com</span>
                </div>
              </div>
              
              <div>
                {formStatus && (
                  <div 
                    className={`mb-6 p-4 rounded-md ${
                      formStatus.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 text-black">
                    <label htmlFor="name" className="block text-sm font-medium text-indigo-900 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-4 text-black">
                    <label htmlFor="email" className="block text-sm font-medium text-indigo-900 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="mb-4 text-black">
                    <label htmlFor="message" className="block text-sm font-medium text-indigo-900 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}  
                      className="w-full px-4 py-3 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Meera Jewelers</h3>
              <p className="text-indigo-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Products', 'Contact'].map(item => (
                  <li key={item}><a href="/contact" className="text-indigo-200 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'FAQ', 'Support', 'Terms', 'Privacy'].map(item => (
                  <li key={item}><a href="#" className="text-indigo-200 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-indigo-200 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800" />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
            <p>© 2025 Meera Jewelers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 

export default ContactPage;