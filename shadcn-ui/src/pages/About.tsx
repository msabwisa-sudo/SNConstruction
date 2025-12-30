import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering premium quality developments',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and transparent processes with all our investors and partners',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing innovative design and sustainable building practices',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with investors, clients, and communities',
    },
  ];

  const team = [
    {
      name: 'Savvas Ibrahim',
      role: 'Co-Founder',
      image: '/assets/s-Ibra.jpg',
      bio: '25+ years of experience in Cyprus real estate development',
    },
    {
      name: 'Nikola Ibrahim',
      role: 'Co-Founder',
      image: '/assets/N-ibra.jpg',
      bio: 'Expert in property investment strategies and portfolio management',
    },
  ];

  const achievements = [
    { year: '2010', title: 'Company Founded', description: 'Established in Limassol with a vision to transform Cyprus real estate' },
    { year: '2015', title: 'First Major Project', description: 'Completed Mediterranean Heights - 200 units sold out within 6 months' },
    { year: '2018', title: 'International Recognition', description: 'Won Best Developer Award at European Property Awards' },
    { year: '2020', title: '€250M Milestone', description: 'Reached €250 million in total project value' },
    { year: '2023', title: 'Sustainability Leader', description: 'Achieved Green Building certification for all new projects' },
    { year: '2025', title: 'Expansion', description: 'Launched 6 new premium developments across Cyprus' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/assets/about-team-office_variant_7.jpg"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A4D2E]/90 to-[#2C5F3E]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
            About Us
          </h1>
          <p className="font-montserrat text-xl max-w-2xl mx-auto">
            Building Cyprus's future, one premium development at a time
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-6">
                Our Story
              </h2>
              <p className="font-montserrat text-lg text-[#6B7280] mb-6">
                Founded in 2010, S N Construction has grown to become one of the leading property developers in Cyprus. Our journey began with a simple vision: to create exceptional residential and commercial spaces that enhance the Mediterranean lifestyle while providing outstanding investment opportunities.
              </p>
              <p className="font-montserrat text-lg text-[#6B7280] mb-6">
                Over the years, we have successfully delivered 15+ premium projects, creating homes and commercial spaces for thousands of satisfied clients and investors. Our commitment to quality, transparency, and innovation has earned us recognition as a trusted partner in Cyprus real estate.
              </p>
              <p className="font-montserrat text-lg text-[#6B7280]">
                Today, we continue to push boundaries with sustainable, luxury developments that set new standards in the Cyprus property market.
              </p>
            </div>
            <div>
              <img
                src="/assets/hero-cyprus-luxury-development_variant_2.jpg"
                alt="Our Projects"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Our Values
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <value.icon className="w-16 h-16 mx-auto mb-4 text-[#C1A875]" />
                  <h3 className="font-montserrat font-semibold text-xl text-[#2C3E50] mb-3">
                    {value.title}
                  </h3>
                  <p className="font-montserrat text-[#6B7280]">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Our Leadership Team
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-montserrat font-semibold text-xl text-[#2C3E50] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-sm text-[#C1A875] mb-3">
                    {member.role}
                  </p>
                  <p className="font-montserrat text-sm text-[#6B7280]">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-4">
              Our Journey
            </h2>
            <p className="font-montserrat text-lg text-[#6B7280]">
              Key milestones in our growth story
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-[#C1A875] rounded-full flex items-center justify-center">
                        <span className="font-playfair font-bold text-2xl text-white">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-montserrat font-semibold text-2xl text-[#2C3E50] mb-2">
                        {achievement.title}
                      </h3>
                      <p className="font-montserrat text-[#6B7280]">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cyprus Market */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/cyprus-coastline-background_variant_1.jpg"
                alt="Cyprus"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-6">
                Why Cyprus?
              </h2>
              <p className="font-montserrat text-lg text-[#6B7280] mb-6">
                Cyprus offers a unique combination of advantages that make it an ideal location for property investment:
              </p>
              <ul className="space-y-4">
                {[
                  'Strategic location at the crossroads of Europe, Asia, and Africa',
                  'EU member state with stable political and economic environment',
                  'Year-round Mediterranean climate with 340 days of sunshine',
                  'Low crime rate and high quality of life',
                  'English-speaking business environment',
                  'Modern infrastructure and excellent healthcare',
                  'Growing tourism industry with 4+ million visitors annually',
                  'Favorable tax regime for businesses and individuals',
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#C1A875] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="font-montserrat text-[#2C3E50]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-[#1A4D2E] to-[#2C5F3E] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Ready to Work With Us?
          </h2>
          <p className="font-montserrat text-xl mb-8">
            Contact our team to learn more about our projects and investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35799548544"
              className="font-montserrat text-lg hover:text-[#C1A875] transition-colors"
            >
              📞 +357 99 548 544
            </a>
            <span className="hidden sm:inline text-[#C1A875]">|</span>
            <a
              href="mailto:Contact@s-n-contruction.com"
              className="font-montserrat text-lg hover:text-[#C1A875] transition-colors"
            >
              ✉️ Contact@s-n-contruction.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}