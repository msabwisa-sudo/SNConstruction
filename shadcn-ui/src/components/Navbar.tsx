import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Investors', path: '/investors' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="public\assets\logo-cyprus-property.png" 
              alt="" 
              className="h-12 w-auto"
            />
            <span className="font-playfair text-xl bg-[#00000000] mt-[0px] mr-[0px] mb-[0px] ml-[12px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-bold opacity-100 text-[#000000]">
              S.N Construction
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-montserrat font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#C1A875]'
                    : 'text-[#2C3E50] hover:text-[#C1A875]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-medium"
              asChild
            >
              <Link to="/investors#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2C3E50]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-montserrat font-medium py-2 ${
                  isActive(item.path)
                    ? 'text-[#C1A875]'
                    : 'text-[#2C3E50]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="w-full bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-medium"
              asChild
            >
              <Link to="/investors#contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}