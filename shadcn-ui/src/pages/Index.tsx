import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import { TrendingUp, Users, Building2, Award } from 'lucide-react';

export default function Index() {
  const featuredProjects = [
    {
      id: '1',
      name: 'Psimolofou Modern Homes',
      location: 'Psimolofou, Nicosia District, Cyprus',
      image: '/assets/psimolofou-project-hero.png',
      type: 'Detached Houses',
      units: 2,
      completion: 'Q4 2025',
      fundingPercentage: 20,
      status: 'construction' as const,
    },
    {
      id: '2',
      name: 'Limassol Marina Residences',
      location: 'Limassol, Cyprus',
      image: '/assets/project-city-apartments.jpg',
      type: 'Apartments',
      units: 156,
      completion: 'Q2 2026',
      fundingPercentage: 92,
      status: 'construction' as const,
    },
    {
      id: '3',
      name: 'Nicosia Urban Residences',
      location: 'Nicosia, Cyprus',
      image: '/assets/nicosia-project-hero.png',
      type: 'Apartment Building',
      units: 12,
      completion: 'Q2 2025',
      fundingPercentage: 65,
      status: 'construction' as const,
    },
  ];

  const stats = [
    { icon: Building2, value: '15+', label: 'Completed Projects' },
    { icon: TrendingUp, value: '€250M+', label: 'Total Investment' },
    { icon: Users, value: '500+', label: 'Happy Investors' },
    { icon: Award, value: '12', label: 'Industry Awards' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/assets/hero-cyprus-luxury-development.jpg"
            alt="Cyprus Luxury Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Invest in Cyprus's Future
          </h1>
          <p className="font-montserrat text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Premium property developments with exceptional returns in the Mediterranean's most sought-after destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold text-lg px-8 py-6"
              asChild
            >
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#1A4D2E] font-montserrat font-semibold text-lg px-8 py-6"
              asChild
            >
              <Link to="/investors">Investment Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1A4D2E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#C1A875]" />
                <div className="font-playfair font-bold text-4xl mb-2">
                  {stat.value}
                </div>
                <div className="font-montserrat text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#2C3E50] mb-4">
              Featured Projects
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280] max-w-2xl mx-auto">
              Discover our latest luxury developments offering exceptional investment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold"
              asChild
            >
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#2C3E50] mb-6">
                Why Invest in Cyprus Real Estate?
              </h2>
              <p className="font-montserrat text-lg text-[#6B7280] mb-8">
                Cyprus offers a unique combination of strategic location, favorable tax regime, and growing demand for premium properties. Our developments provide:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'High ROI potential with 8-12% annual returns',
                  'EU citizenship by investment program',
                  'Low property taxes and favorable tax regime',
                  'Growing tourism and expat market',
                  'Mediterranean lifestyle and climate',
                  'Strategic location between Europe, Asia, and Africa',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#C1A875] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="font-montserrat text-[#2C3E50]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold"
                asChild
              >
                <Link to="/investors">Learn More About Investing</Link>
              </Button>
            </div>
            <div className="relative">
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1A4D2E] to-[#2C5F3E] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="font-montserrat text-xl mb-8">
            Join hundreds of successful investors who have chosen Cyprus Elite Properties for their real estate investments
          </p>
          <Button
            size="lg"
            className="bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold text-lg px-8 py-6"
            asChild
          >
            <Link to="/investors#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}