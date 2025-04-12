        "use client";
            import React, { useState, useEffect } from 'react';
            import Navigation from '../component/navbar';
            import Footer from '../component/footer';
          

            
        const AboutPage = () => {
            return (
            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
                <Navigation />
        
                {/* Hero Section */}
                <section className="pt-24 pb-12 px-4 text-center">
                <div className="max-w-6xl mx-auto ">
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">About Our Jewelry</h1>
                    <p className="text-lg text-indigo-700 max-w-3xl mx-auto">
                    Discover the craftsmanship, dedication, and artistry behind our handcrafted pieces that have 
                    adorned our cherished customers for generations.
                    </p>
                </div>
                </section>
                <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl font-bold text-indigo-900 mb-4">Our Story</h2>
                <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
                    <p className="text-gray-700 mb-4">
                    Mira Jewelers has evolved form  workshop to one of the most 
                        respected jewelry retailers in the country. Our commitment to quality and craftsmanship 
                        has remained unchanged throughout our journey.
                    </p>
                    <p className="text-gray-700">
                        Each piece in our collection tells a unique story, combining traditional techniques with 
                        contemporary designs. Our master craftsmen, with decades of experience, ensure that every 
                        detail is perfect and every gem is set to showcase its natural beauty.
                </p>
                </div>
                <div className="bg-indigo-100 rounded-lg overflow-hidden h-80">
                <img
                    src="jewelery.jpg" 
                    alt="Our Workshop" 
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
            </div>
        </section>
                        <section className="py-16 bg-indigo-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-indigo-900 mb-2">Understanding Gold Quality</h2>
                    <p className="text-indigo-700 max-w-2xl mx-auto">
                        Gold purity is measured in karats, with 24 karat being pure gold. Learn about different 
                        gold types and what makes each special.
                    </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-indigo-900 mb-3 text-center">Gold Purity</h3>
                        <p className="text-gray-700 mb-4">
                        Gold purity is measured in karats (K), indicating the percentage of pure gold in an alloy:
                        </p>
                        <ul className="space-y-2 text-gray-700 ">
                        <li ><span className="font-medium">24K:</span> 99.9% pure gold</li>
                        <li><span className="font-medium">22K:</span> 91.7% gold</li>
                        <li><span className="font-medium">18K:</span> 75% gold</li>
                        <li><span className="font-medium">14K:</span> 58.3% gold</li>
                        <li><span className="font-medium">10K:</span> 41.7% gold</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-indigo-900 mb-3 text-center">Gold Colors</h3>
                        <p className="text-gray-700 mb-4">
                        Gold comes in various colors depending on the metals mixed with it:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                        <li><span className="font-medium">Yellow Gold:</span> Classic mix of gold, silver, and copper</li>
                        <li><span className="font-medium">White Gold:</span> Gold alloyed with nickel, silver, or palladium</li>
                        <li><span className="font-medium">Rose Gold:</span> Gold mixed with copper for a pink hue</li>
                        <li><span className="font-medium">Green Gold:</span> Gold mixed with silver and zinc</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-indigo-900 mb-3 text-center">Care & Maintenance</h3>
                        <p className="text-gray-700 mb-4">
                        To keep your gold jewelry looking its best:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                        <li>Clean with mild soap and warm water</li>
                        <li>Avoid chemicals including chlorine and cleaning products</li>
                        <li>Store separately to prevent scratches</li>
                        <li>Have professional cleaning done annually</li>
                        <li>Remove before swimming or exercising</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </section>
                <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">Today's Gold Value</h2>
            <p className="text-indigo-700 max-w-2xl mx-auto">
              Our transparent pricing ensures you always know what you're paying for. Below are our 
              current gold rates including making charges.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-collapse rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-indigo-900 text-white">
                  <th className="py-3 px-6 text-left">Gold Type</th>
                  <th className="py-3 px-6 text-left">Making Charges</th>
                  <th className="py-3 px-6 text-left">Total Value (Per gram)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white">
                <tr className="bg-yellow-100">
                  <td className="py-3 px-6 font-medium text-black">10 carat gold</td>
                  <td className="py-3 px-6 text-black">3%</td>
                  <td className="py-3 px-6 text-black">₹2,200</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="py-3 px-6 font-medium text-black">14 carat gold</td>
                  <td className="py-3 px-6 text-black">6%</td>
                  <td className="py-3 px-6 text-black">₹5,048</td>
                </tr>
                <tr className ="bg-yellow-100">
                  <td className="py-3 px-6 font-medium text-black">18 carat gold</td>
                  <td className="py-3 px-6 text-black">10%</td>
                  <td className="py-3 px-6 text-black">₹7,000</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="py-3 px-6 font-medium text-black ">22 carat gold</td>
                  <td className="py-3 px-6 text-black">20%</td>
                  <td className="py-3 px-6 text-black">₹8,600</td>
                </tr>
                <tr className ="bg-yellow-100">
                  <td className="py-3 px-6 font-medium text-black">24 carat gold</td>
                  <td className="py-3 px-6 text-black">25%</td>
                  <td className="py-3 px-6 text-black">₹9,030</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Prices updated on April 5, 2025. Rates may vary based on market fluctuations.
          </p>
        </div>
      </section>
      <section className="py-16 bg-indigo-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-indigo-900 mb-2">Our Crafting Process</h2>
              <p className="text-indigo-700 max-w-2xl mx-auto">
                Every piece of jewelry goes through a meticulous process to ensure the highest quality and craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-12 left-16 right-16 h-1 bg-indigo-300 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full text-center">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">Design</h3>
                  <p className="text-gray-700">
                    Our designers sketch concepts and create detailed blueprints for each piece, considering aesthetics and wearability.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full text-center">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">Material Selection</h3>
                  <p className="text-gray-700">
                    We carefully select ethically sourced precious metals and gemstones that meet our quality standards.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full text-center">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">Crafting</h3>
                  <p className="text-gray-700">
                    Our master craftspeople hand-forge, set stones, and polish each piece with precision and attention to detail.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                  4
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full text-center">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">Quality Assurance</h3>
                  <p className="text-gray-700">
                    Each piece undergoes rigorous quality checks to ensure durability, finishing, and gemstone security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Commitment to Excellence Section */}
          <section className="py-16 bg-indigo-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
                  Our Commitment to Excellence
                </h2>
                
                <p className="text-indigo-700 mb-8 max-w-3xl mx-auto text-center">
                  At Meera Jewelers, we believe that jewelry is more than just an accessory—it's a statement of identity, 
                  a marker of significant moments, and a timeless treasure passed through generations.
                </p>
                
                <p className="text-indigo-700 mb-8 max-w-3xl mx-auto">
                  Since our founding in 2015, we've dedicated ourselves to crafting pieces that combine traditional 
                  artisanship with contemporary design. Each piece in our collection represents our unwavering commitment 
                  to quality and our passion for creating jewelry that resonates with personal meaning.
                </p>
                
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Our Promise to You</h3>
                <ul className="space-y-3 mb-10">
                  {[
                    { title: "Quality Materials", desc: "We use only ethically sourced precious metals and gemstones" },
                    { title: "Craftsmanship", desc: "Each piece is meticulously crafted by our skilled artisans" },
                    { title: "Transparency", desc: "We believe in fair pricing and clear information about our products" },
                    { title: "Personalized Service", desc: "Your satisfaction is our priority" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-indigo-500 rounded-full p-1 mt-1 mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-indigo-900">{item.title}:</span> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
                
                <p className="text-indigo-700 mb-8 max-w-3xl mx-auto">
                  Whether you're celebrating a special occasion, seeking a meaningful gift, or treating yourself 
                  to something beautiful, we're honored to be part of your story.
                </p>
                
                <p className="text-indigo-700 mb-10 max-w-3xl mx-auto">
                  Our team is always available to assist you in finding or creating the perfect piece that 
                  reflects your unique style and significance.
                </p>
                
                <div className="text-center italic text-xl text-indigo-600 mb-10 border-l-4 border-indigo-500 pl-4 py-2 max-w-2xl mx-auto">
                  "We don't just make jewelry; we craft memories that last a lifetime."
                </div>
                
                <div className="text-center">
                  <a
                    href="/contact" 
                    className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Contact our team today
                  </a>
                </div>
              </div>
            </div>
          </section>
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
                              <li key={item}><a href="#" className="text-indigo-200 hover:text-white transition-colors">{item}</a></li>
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
                  
                  export default AboutPage;
                  