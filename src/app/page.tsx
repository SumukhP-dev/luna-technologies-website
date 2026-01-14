export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Luna Technologies</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Innovating Tomorrow's
            <span className="block text-indigo-600">Technology Solutions</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Luna Technologies delivers cutting-edge software solutions, AI integration, and digital transformation services to help businesses thrive in the modern era.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </a>
          </div>
        </section>

        <section id="services" className="mt-20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900">Our Services</h3>
            <p className="mt-4 text-lg text-gray-500">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900">Web Development</h4>
              <p className="mt-2 text-gray-600">Custom web applications built with modern technologies and best practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900">AI Integration</h4>
              <p className="mt-2 text-gray-600">Leverage artificial intelligence to automate processes and enhance decision-making.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900">Cloud Solutions</h4>
              <p className="mt-2 text-gray-600">Scalable cloud infrastructure and migration services for optimal performance.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-900">About Luna Technologies</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are a team of passionate technologists dedicated to helping businesses leverage cutting-edge technology 
              to achieve their goals. With expertise in web development, artificial intelligence, and cloud computing, 
              we provide comprehensive solutions tailored to your unique needs.
            </p>
          </div>
        </section>

        <section id="contact" className="mt-20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
            <p className="mt-4 text-lg text-gray-500">Ready to transform your business? Let's talk about your project.</p>
            <div className="mt-8">
              <a href="mailto:contact@lunatechnologies.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Luna Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}