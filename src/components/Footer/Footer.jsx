import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Website Name */}
          <div>
            <h2 className="text-xl font-bold">ExploreSouthAsia.com</h2>
            <p className="mt-2">&copy; 2024 Explore South Asia. All rights reserved.</p>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2">Email: info@exploresouthasia.com</p>
            <p>Phone: +1-555-123-4567</p>
          </div>
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-2 flex space-x-4">
              <li>
                <a href="https://www.facebook.com/exploresouthasia" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-blue-400 hover:text-blue-500" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/exploresouthasia" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-400 hover:text-pink-500" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/exploresouthasia" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 hover:text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
          {/* Relevant Topics */}
          <div>
            <h3 className="text-lg font-semibold">Explore More</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="/activities" className="text-gray-400 hover:text-white">Activities</a></li>
              <li><a href="/culture" className="text-gray-400 hover:text-white">Culture</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
