    "use client";
    import { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
  

    const slides = [
      {
        id: 1,
        title: "Welcome to Our Website",
        content: "Discover our amazing Designs!",
        image: "1080jeweleryhd.jpg" 
      }
    ,
      {
        id: 2,
        title: "Explore New ",
        content: "Find your next Jewelery status!",
        image: "1080image1.jpg"
      },
      {
        id: 3,
        title: "Unforgettable Memories",
        content: "Create stories worth sharing!",
        image: "1080jewelery4.jpg" 
      }
    ];
    const slideVariants = {
      enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.95,
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] 
        }
      },
      exit: (direction: number) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }
      })
    };
    const textVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0, 0.71, 0.2, 1.01]
        }
      })
    };
    
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Add this line to define isScrolled state and its setter
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
      return (
        <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 duration-500 
        shadow-lg backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex static justify-between items-center h-16">
              <motion.div 
                className="flex-shrink-0 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-400 font-bold text-xl">Meera Jewelers </span>
              </motion.div>          
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
      <motion.a
        href="#"
        className="text-blue hover:text-blue-400 font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Home
      </motion.a>
      <motion.a
        href="#"
        className="text-blue hover:text-blue-400 font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Products
      </motion.a>
      <motion.a
        href="#"
        className="text-blue hover:text-blue-400 font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Services
      </motion.a>
      <motion.a
        href="/about"
        className="text-blue hover:text-blue-400 font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        About
      </motion.a>
      <motion.a
        href="/contact"
        className="text-blue hover:text-blue-400 font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </motion.a>
    </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden bg-indigo-800"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {['Home', 'Products', 'Services', 'About', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      );
    };
    export default function HomePage() {
      const [currentSlide, setCurrentSlide] = useState(0);
const [direction, setDirection] = useState(1);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);

useEffect(() => {
  if (!isAutoPlaying) return;

  const interval = setInterval(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval); // Clean up
}, [isAutoPlaying, slides.length]);

      const handleNext = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false); 
      };
      const handlePrev = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false); 
      };
      const goToSlide = (index:number) => {
        if (
          typeof index !== "number" ||
          isNaN(index) ||
          index < 0 ||
          index >= slides.length
        ) {
          console.warn("Invalid slide index:", index);
          return;
        }
      
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
        setIsAutoPlaying(false); 
      };
      
      return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
          <Navigation />      
          {/* Hero Section with Featured Slider */}
          <section className="">
          <div className="h-screen relative overflow ">       
              <div className="relative w-full h-96 md:h-[44rem] overflow-hidden  shadow-xl ">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={slides[currentSlide].id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full h-full">
                    <div className="relative h-full">
                      <motion.img
                        src={slides[currentSlide].image}
                        alt="Slide"
                        className="object-cover w-full h-full"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6 }}
                      />
                      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white max-w-2xl px-4">
                          <motion.h1
                            custom={0.2}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-3xl md:text-4xl font-bold mb-4"
                          >
                            {slides[currentSlide].title}
                          </motion.h1>
                          <motion.p
                            custom={0.4}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-lg mb-6"
                          >
                            {slides[currentSlide].content}
                          </motion.p>
                          <motion.button
                            custom={0.6}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="bg-white text-indigo-900 py-2 px-6 rounded-full font-medium hover:bg-indigo-100 transition-colors"
                          >
                            Explore Now
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Navigation Arrows */}
                              <motion.button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-indigo-900/40 hover:bg-indigo-900/60 text-white rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-indigo-900/40 hover:bg-indigo-900/60 text-white rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={index === currentSlide ? { scale: [1, 1.2, 1] } : {}}
                      transition={index === currentSlide ? { duration: 0.5, repeat: Infinity, repeatDelay: 2 } : {}}
                    />
                  ))}
                </div>
                {/* Progress bar */}
                {isAutoPlaying && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "" }}
                    key={currentSlide}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                )}
              </div>
            </div>
          </section>
          {/* Additional Page Content */}
                    <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="text-center mb-12"> 
                    <h2 className="text-3xl font-bold text-indigo-900 mb-2">Today,s Gold Value </h2>
                    <br></br>
                  <p className="text-indigo-700 max-w-2x3  mx-auto">10 carat gold  - making charges 3% total value- 2,200 Per gram </p>
                  <p className="text-indigo-700 max-w-2xl  mx-auto">14 carat gold  - making charges 6% total value- 5,048 Per gram </p>
                  <p className="text-indigo-700 max-w-2xl  mx-auto">18 carat gold  - making charges 10% total value- 7,000 Per gram </p>
                  <p className="text-indigo-700 max-w-2xl  mx-auto">22 carat gold  - making charges 20% total value- 8,600 Per gram </p>
                  <p className="text-indigo-700 max-w-2xl  mx-auto">24 carat gold  - making charges 25% total value- 9,030 Per gram </p>
                  <br></br>
                  <br></br>
                  <br></br>
                    <h2 className="text-3xl font-bold text-indigo-900 mb-2">Our Popular Categories</h2>
                    <p className="text-indigo-700 max-w-2xl mx-auto">Browse through our most popular product categories and find what you need</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        id: 1,
                        name: "Rings",
                        description: "Explore our range of rings and accessories.",
                        image: "ring.jpg"
                      },
                      {
                        id: 2,
                        name: "Necklaces",
                        description: "Transform your fashion with our stylish and modern Hand made necklaces ",
                        image: "jewelery.jpg"
                      },
                      {
                        id: 3,
                        name: "Bracelet",
                        description: "Discover the latest trends of bracelet,s and make your empty hands feel royal .",
                        image: "jewelery2.jpg"
                      }
                    ].map((category) => (
                      <motion.div 
                        key={category.id} 
                        className="bg-indigo-50 rounded-lg shadow-md overflow-hidden "
                        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.1)' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-48">
                          <img
                            src={category.image}
                            alt={`${category.name} Category`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                            {category.name}
                          </h3>
                          <p className="text-indigo-700 mb-4">
                            {category.description}
                          </p>
                          <motion.button
                            className="text-white bg-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View More
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
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
    }