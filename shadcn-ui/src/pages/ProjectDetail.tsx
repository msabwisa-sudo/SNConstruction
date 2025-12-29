import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProgressBar from '@/components/ProgressBar';
import InvestorForm from '@/components/InvestorForm';
import { MapPin, Home, Calendar, TrendingUp, Users, DollarSign, ArrowLeft, CheckCircle2 } from 'lucide-react';

const projectsData = {
  '1': {
    id: '1',
    name: 'Modern Residential Villas – Psimolofou',
    location: 'Psimolofou, Cyprus',
    image: '/assets/psimolofou-project-hero.png',
    type: 'Detached Modern House',
    units: 1,
    completion: 'Q2 2026',
    fundingPercentage: 45,
    status: 'Under Construction',
    description: 'This modern residential project in Psimolofou represents contemporary Cypriot living with a strong focus on functionality, comfort, and high-quality construction. Designed with clean architectural lines and premium interior finishes, the residence offers spacious interiors, private outdoor areas, and modern amenities suitable for families or private homeowners. The project combines modern design, efficient layouts, and durable construction standards, making it an ideal choice for both owner-occupiers and long-term residential investment.',
    price: '€285,000',
    size: '160 m²',
    plotSize: '281 m²',
    bedrooms: '3',
    bathrooms: '3',
    ownership: 'Freehold',
    investment: {
      minInvestment: '€285,000',
      expectedROI: 'Long-term value',
      rentalYield: 'Owner-occupied / Investment',
    },
    features: [
      'Modern architectural design',
      'Open-plan kitchen, dining & living areas',
      'High-quality kitchen cabinetry and finishes',
      'Contemporary bathrooms with walk-in showers',
      'Built-in wardrobes',
      'Energy-efficient windows & insulation',
      'Private outdoor terrace and garden area',
      'Provision for air-conditioning units',
      'Private covered parking',
      'High construction standards by S.N. Construction',
    ],
    locationHighlights: [
      'Quiet residential neighborhood',
      'Easy access to main roads',
      'Close to schools, shops, and services',
      'Short drive to Nicosia',
      'Ideal for families and long-term living',
    ],
    milestones: [
      { label: 'Land Acquisition', percentage: 100, completed: true },
      { label: 'Architectural & Planning Approvals', percentage: 100, completed: true },
      { label: 'Foundation Works', percentage: 100, completed: true },
      { label: 'Structural Works', percentage: 45, completed: false },
      { label: 'Interior & Exterior Finishing', percentage: 0, completed: false },
      { label: 'Final Completion', percentage: 0, completed: false },
    ]
  },
  '2': {
    id: '2',
  name: 'Modern Urban Apartments – Nicosia',
  location: 'Nicosia, Cyprus',
  image: '/assets/project-modern-apartments-nicosia_variant_1.jpg',
  type: 'Residential Apartment Building',
  units: 12,
  completion: 'Q3 2025',
  fundingPercentage: 60,
  status: 'Under Construction',
  description: 'Modern residential apartment building in Nicosia designed for contemporary urban living. The project features clean architectural lines, spacious balconies, and well-designed apartments suitable for homeowners and long-term rental investment. Located in a high-demand urban area, the development offers strong fundamentals for capital appreciation and rental stability.',
  price: 'From €165,000',
  size: '75 – 110 m²',
  investment: {
    minInvestment: 'From €165,000',
    expectedROI: 'Stable long-term growth',
    rentalYield: '6–8%',
  },
  features: [
    'Modern architectural design',
    'Spacious balconies',
    'High-quality exterior finishes',
    'Energy-efficient windows',
    'Elevator access',
    'Secure building entrance',
    'Designated parking spaces',
    'Low-maintenance materials',
  ],
  locationHighlights: [
    'Central Nicosia location',
    'Close to shops and services',
    'Easy access to main roads',
    'High rental demand area',
    'Near schools and offices',
  ],
  milestones: [
    { label: 'Land Acquisition', percentage: 100, completed: true },
    { label: 'Planning Approval', percentage: 100, completed: true },
    { label: 'Foundation Work', percentage: 100, completed: true },
    { label: 'Construction Phase', percentage: 60, completed: false },
    { label: 'Interior Finishing', percentage: 25, completed: false },
    { label: 'Final Completion', percentage: 0, completed: false },
  ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h1 className="font-playfair text-3xl font-bold mb-4">Project Not Found</h1>
          <Button asChild className="bg-[#C1A875] hover:bg-[#A68F5F]">
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#F4F1DE]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Button variant="ghost" asChild className="font-montserrat">
          <Link to="/projects">
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <section className="relative h-[500px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-playfair font-bold text-5xl text-white mb-4">
              {project.name}
            </h1>
            <div className="flex items-center text-white text-lg font-montserrat">
              <MapPin className="mr-2" size={20} />
              {project.location}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Project Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-playfair font-bold text-3xl text-[#2C3E50] mb-4">
                    Project Overview
                  </h2>
                  <p className="font-montserrat text-[#6B7280] leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-[#C1A875] font-montserrat text-sm mb-1">Type</div>
                      <div className="font-montserrat font-semibold text-[#2C3E50]">{project.type}</div>
                    </div>
                    {project.units && (
                      <div>
                        <div className="text-[#C1A875] font-montserrat text-sm mb-1">Units</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.units}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-[#C1A875] font-montserrat text-sm mb-1">Size</div>
                      <div className="font-montserrat font-semibold text-[#2C3E50]">{project.size}</div>
                    </div>
                    {project.bedrooms && (
                      <div>
                        <div className="text-[#C1A875] font-montserrat text-sm mb-1">Bedrooms</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.bedrooms}</div>
                      </div>
                    )}
                    {project.plotSize && (
                      <div>
                        <div className="text-[#C1A875] font-montserrat text-sm mb-1">Plot Size</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.plotSize}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Funding Progress */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-playfair font-bold text-3xl text-[#2C3E50] mb-6">
                    Construction Progress
                  </h2>
                  <ProgressBar percentage={project.fundingPercentage} label="Overall Progress" />
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="font-montserrat font-semibold text-xl text-[#2C3E50] mb-4">
                      Project Milestones
                    </h3>
                    {project.milestones.map((milestone, index) => (
                      <div key={index}>
                        <ProgressBar 
                          percentage={milestone.percentage} 
                          label={milestone.label}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-playfair font-bold text-3xl text-[#2C3E50] mb-6">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C1A875] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-montserrat text-[#2C3E50]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Highlights */}
              {project.locationHighlights && (
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-playfair font-bold text-3xl text-[#2C3E50] mb-6">
                      Location Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.locationHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <MapPin className="w-5 h-5 text-[#C1A875] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="font-montserrat text-[#2C3E50]">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Investment Info */}
            <div className="space-y-8">
              {/* Investment Details */}
              <Card className="sticky top-24">
                <CardContent className="p-8">
                  <h3 className="font-playfair font-bold text-2xl text-[#2C3E50] mb-6">
                    Investment Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <DollarSign className="text-[#C1A875] mr-3 mt-1" size={24} />
                      <div>
                        <div className="font-montserrat text-sm text-[#6B7280]">Price</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.price}</div>
                      </div>
                    </div>
                    
                    {project.investment.expectedROI && (
                      <div className="flex items-start">
                        <TrendingUp className="text-[#C1A875] mr-3 mt-1" size={24} />
                        <div>
                          <div className="font-montserrat text-sm text-[#6B7280]">Expected ROI</div>
                          <div className="font-montserrat font-semibold text-[#2C3E50]">{project.investment.expectedROI}</div>
                        </div>
                      </div>
                    )}
                    
                    {project.investment.rentalYield && (
                      <div className="flex items-start">
                        <Home className="text-[#C1A875] mr-3 mt-1" size={24} />
                        <div>
                          <div className="font-montserrat text-sm text-[#6B7280]">Rental Yield</div>
                          <div className="font-montserrat font-semibold text-[#2C3E50]">{project.investment.rentalYield}</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start">
                      <Users className="text-[#C1A875] mr-3 mt-1" size={24} />
                      <div>
                        <div className="font-montserrat text-sm text-[#6B7280]">Investment Amount</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.investment.minInvestment}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="text-[#C1A875] mr-3 mt-1" size={24} />
                      <div>
                        <div className="font-montserrat text-sm text-[#6B7280]">Completion</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.completion}</div>
                      </div>
                    </div>

                    {project.ownership && (
                      <div className="pt-4 border-t">
                        <div className="font-montserrat text-sm text-[#6B7280] mb-1">Ownership Type</div>
                        <div className="font-montserrat font-semibold text-[#2C3E50]">{project.ownership}</div>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full mt-8 bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold py-6"
                    asChild
                  >
                    <a href="#contact">Request Information</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact" className="mt-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-playfair font-bold text-3xl text-[#2C3E50] mb-6">
                  Request More Information
                </h2>
                <p className="font-montserrat text-[#6B7280] mb-6">
                  Interested in this project? Fill out the form below and our team will get back to you shortly.
                </p>
                <InvestorForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}