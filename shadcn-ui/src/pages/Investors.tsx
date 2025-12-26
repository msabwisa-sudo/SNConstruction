import { Card, CardContent } from '@/components/ui/card';
import InvestorForm from '@/components/InvestorForm';
import { TrendingUp, Shield, Globe, Award, CheckCircle2 } from 'lucide-react';

export default function Investors() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'High Returns',
      description: 'Average ROI of 10-12% annually with strong capital appreciation potential',
    },
    {
      icon: Shield,
      title: 'Secure Investment',
      description: 'Property-backed investments with full legal protection and transparent processes',
    },
    {
      icon: Globe,
      title: 'EU Citizenship',
      description: 'Access to Cyprus citizenship by investment program for qualifying investors',
    },
    {
      icon: Award,
      title: 'Tax Benefits',
      description: 'Favorable tax regime with no inheritance tax and low property taxes',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Meet with our investment team to discuss your goals and explore available opportunities',
    },
    {
      step: '2',
      title: 'Project Selection',
      description: 'Choose from our portfolio of premium developments based on your investment criteria',
    },
    {
      step: '3',
      title: 'Due Diligence',
      description: 'Review all project documentation, financial projections, and legal agreements',
    },
    {
      step: '4',
      title: 'Investment Agreement',
      description: 'Sign the investment agreement and complete the initial payment',
    },
    {
      step: '5',
      title: 'Project Updates',
      description: 'Receive regular updates on construction progress and funding milestones',
    },
    {
      step: '6',
      title: 'Returns & Exit',
      description: 'Receive your returns through rental income, property sale, or refinancing',
    },
  ];

  const testimonials = [
    {
      name: 'Michael Anderson',
      role: 'Private Investor',
      content: 'Investing with Cyprus Elite Properties has been one of my best financial decisions. The returns have exceeded expectations, and the team is incredibly professional.',
      image: '/assets/about-team-office_variant_1.jpg',
    },
    {
      name: 'Sarah Williams',
      role: 'Real Estate Fund Manager',
      content: 'The transparency and quality of their developments are outstanding. We have invested in multiple projects and consistently achieved strong returns.',
      image: '/assets/about-team-office_variant_2.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#1A4D2E] to-[#2C5F3E]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
            Investment Opportunities
          </h1>
          <p className="font-montserrat text-xl max-w-2xl mx-auto">
            Join successful investors building wealth through Cyprus real estate
          </p>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Why Invest With Us
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280] max-w-2xl mx-auto">
              Cyprus Elite Properties offers unique advantages for discerning investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <benefit.icon className="w-16 h-16 mx-auto mb-4 text-[#C1A875]" />
                  <h3 className="font-montserrat font-semibold text-xl text-[#2C3E50] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-[#6B7280]">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-24 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Investment Process
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280] max-w-2xl mx-auto">
              A simple, transparent process from initial consultation to returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#C1A875] rounded-full flex items-center justify-center">
                    <span className="font-playfair font-bold text-3xl text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-[#2C3E50] mb-3 pr-20">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-[#6B7280]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cyprus Market Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-6">
                Cyprus Real Estate Market
              </h2>
              <p className="font-montserrat text-lg text-[#6B7280] mb-6">
                Cyprus continues to be one of Europe's most attractive real estate markets, offering exceptional opportunities for investors.
              </p>
              <ul className="space-y-4">
                {[
                  'Property prices increased by 8.2% in 2024',
                  'Tourism arrivals reached record highs',
                  'Growing expat and digital nomad community',
                  'Strong rental demand in major cities',
                  'Government support for property investment',
                  'Strategic location and EU membership',
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-[#4CAF50] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-montserrat text-[#2C3E50]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/assets/investment-growth-chart_variant_1.jpg"
                alt="Market Growth"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Investor Testimonials
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              Hear from our satisfied investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <p className="font-montserrat text-[#2C3E50] italic mb-6 text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-montserrat font-semibold text-[#2C3E50]">
                        {testimonial.name}
                      </div>
                      <div className="font-montserrat text-sm text-[#6B7280]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Start Your Investment Journey
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              Fill out the form below and our investment team will contact you within 24 hours
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <InvestorForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}