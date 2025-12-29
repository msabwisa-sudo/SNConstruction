import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Briefcase, Users, TrendingUp, Heart, Upload } from 'lucide-react';

export default function Careers() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Application Submitted!',
      description: 'Thank you for your interest. Our HR team will review your application and contact you soon.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with experienced professionals in a collaborative environment',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and generous vacation policy',
    },
    {
      icon: Briefcase,
      title: 'Competitive Package',
      description: 'Attractive salary, bonuses, and comprehensive benefits',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Project Manager',
      department: 'Construction',
      location: 'Limassol, Cyprus',
      type: 'Full-time',
      description: 'Lead large-scale residential and commercial development projects from planning to completion.',
    },
    {
      title: 'Civil Engineer',
      department: 'Engineering',
      location: 'Paphos, Cyprus',
      type: 'Full-time',
      description: 'Design and oversee construction of luxury villa developments and infrastructure projects.',
    },
    {
      title: 'Sales & Marketing Manager',
      department: 'Sales',
      location: 'Limassol, Cyprus',
      type: 'Full-time',
      description: 'Drive sales strategy and marketing initiatives for premium property developments.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#1A4D2E] to-[#2C5F3E]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
            Join Our Team
          </h1>
          <p className="font-montserrat text-xl max-w-2xl mx-auto">
            Build your career with Cyprus's leading property developer
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Why Work With Us
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280] max-w-2xl mx-auto">
              Join a dynamic team that's shaping the future of Cyprus real estate
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

      {/* Company Culture */}
      <section className="py-24 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-6">
                Our Culture
              </h2>
              <p className="font-montserrat text-lg text-[#6B7280] mb-6">
                At S.N Construction, we believe in creating an environment where talent thrives and innovation flourishes. Our team is our greatest asset, and we invest in their growth and success.
              </p>
              <ul className="space-y-4">
                {[
                  'Collaborative and inclusive work environment',
                  'Recognition and rewards for outstanding performance',
                  'Professional development and training programs',
                  'Modern office spaces with state-of-the-art facilities',
                  'Team building activities and company events',
                  'Health and wellness programs',
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#C1A875] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="font-montserrat text-[#2C3E50]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/assets/about-team-office.jpg"
                alt="Our Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Open Positions
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              Explore exciting career opportunities across our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-montserrat font-semibold text-2xl text-[#2C3E50] mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#C1A875] text-white text-sm rounded-full font-montserrat">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-[#F4F1DE] text-[#2C3E50] text-sm rounded-full font-montserrat">
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="font-montserrat text-[#6B7280] mb-4">
                    {position.description}
                  </p>
                  <div className="flex items-center text-[#6B7280] text-sm font-montserrat mb-4">
                    <svg className="w-4 h-4 mr-2 text-[#C1A875]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {position.location}
                  </div>
                  <Button 
                    className="w-full bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold"
                    asChild
                  >
                    <a href="#apply">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-[#F4F1DE]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Apply for a Position
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              Submit your application and join our talented team
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-montserrat font-medium text-[#2C3E50]">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-montserrat font-medium text-[#2C3E50]">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-montserrat font-medium text-[#2C3E50]">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
                  />
                </div>

                <div>
                  <Label htmlFor="position" className="font-montserrat font-medium text-[#2C3E50]">
                    Position Applied For *
                  </Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Senior Project Manager"
                    className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="font-montserrat font-medium text-[#2C3E50]">
                    Years of Experience *
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 5 years"
                    className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-montserrat font-medium text-[#2C3E50]">
                    Cover Letter / Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
                    placeholder="Tell us why you'd be a great fit for our team..."
                  />
                </div>

                <div>
                  <Label className="font-montserrat font-medium text-[#2C3E50] mb-2 block">
                    Upload Resume (CV) *
                  </Label>
                  <div className="border-2 border-dashed border-[#C1A875] rounded-lg p-8 text-center hover:bg-[#F4F1DE] transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-3 text-[#C1A875]" />
                    <p className="font-montserrat text-[#2C3E50] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="font-montserrat text-sm text-[#6B7280]">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold py-6 text-lg"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-6">
            Questions About Working With Us?
          </h2>
          <p className="font-montserrat text-lg text-[#6B7280] mb-8">
            Our HR team is here to help. Contact us for more information about career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@snconstruction.com"
              className="font-montserrat text-lg text-[#C1A875] hover:text-[#A68F5F] transition-colors"
            >
              ✉️ careers@snconstruction.com
            </a>
            <span className="hidden sm:inline text-[#C1A875]">|</span>
            <a
              href="tel:+35725123456"
              className="font-montserrat text-lg text-[#C1A875] hover:text-[#A68F5F] transition-colors"
            >
              📞 +357 25 123 456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}