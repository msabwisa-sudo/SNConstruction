import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
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

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#1A4D2E] to-[#2C5F3E]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
            Our Projects
          </h1>
          <p className="font-montserrat text-xl max-w-2xl mx-auto">
            Explore our portfolio of luxury developments across Cyprus
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#F4F1DE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-12">
            <Tabs value={filter} onValueChange={setFilter} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-white">
                <TabsTrigger value="all" className="font-montserrat">
                  All
                </TabsTrigger>
                <TabsTrigger value="planning" className="font-montserrat">
                  Planning
                </TabsTrigger>
                <TabsTrigger value="construction" className="font-montserrat">
                  Construction
                </TabsTrigger>
                <TabsTrigger value="completed" className="font-montserrat">
                  Completed
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-montserrat text-lg text-[#6B7280]">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-[#2C3E50] mb-6">
            Interested in a Project?
          </h2>
          <p className="font-montserrat text-lg text-[#6B7280] mb-8">
            Contact our team to learn more about investment opportunities and available units
          </p>
          <Button
            size="lg"
            className="bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold"
          >
            Contact Investment Team
          </Button>
        </div>
      </section>
    </div>
  );
}