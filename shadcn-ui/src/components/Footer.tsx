import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A4D2E] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="/assets/logo-cyprus-property2.png" 
              alt="Cyprus Property Development" 
              className="h-12 w-auto mb-4"
            />
            <h3 className="font-playfair font-bold text-xl mb-4">
              S.N. Construction Ltd.
            </h3>
            <p className="font-montserrat text-sm text-gray-300">
              Leading property developer in Cyprus, creating luxury residential and commercial projects with exceptional investment opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#C1A875] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-[#C1A875] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-gray-300 hover:text-[#C1A875] transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#C1A875] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 font-montserrat text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#C1A875]" />
                <span className="text-gray-300">
                  Potamia, Cyprus
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#C1A875]" />
                <span className="text-gray-300">+357 99 548 544 / +357 99 291 379</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[#C1A875]" />
                <span className="text-gray-300">s.n.limited2022@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#C1A875] p-3 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#C1A875] p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#C1A875] p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-montserrat text-sm bg-[#00000000] mt-[0px] mr-[0px] mb-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal text-center opacity-100 text-[#D1D5DB]">
            © 2026 S.N. Construction Developer Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
