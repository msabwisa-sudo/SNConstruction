import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Calendar } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface ProjectCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  type: string;
  units: number;
  completion: string;
  fundingPercentage: number;
  status: 'planning' | 'construction' | 'completed';
}

export default function ProjectCard({
  id,
  name,
  location,
  image,
  type,
  units,
  completion,
  fundingPercentage,
  status,
}: ProjectCardProps) {
  const statusColors = {
    planning: 'bg-blue-100 text-blue-800',
    construction: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
  };

  const statusLabels = {
    planning: 'Planning',
    construction: 'Under Construction',
    completed: 'Completed',
  };

  return (
    <Link to={`/projects/${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className={`absolute top-4 right-4 ${statusColors[status]}`}>
            {statusLabels[status]}
          </Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="font-playfair font-semibold text-2xl text-[#2C3E50] mb-3">
            {name}
          </h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-[#6B7280] text-sm font-montserrat">
              <MapPin size={16} className="mr-2 text-[#C1A875]" />
              {location}
            </div>
            <div className="flex items-center text-[#6B7280] text-sm font-montserrat">
              <Home size={16} className="mr-2 text-[#C1A875]" />
              {type} • {units} Units
            </div>
            <div className="flex items-center text-[#6B7280] text-sm font-montserrat">
              <Calendar size={16} className="mr-2 text-[#C1A875]" />
              Completion: {completion}
            </div>
          </div>

          <ProgressBar 
            percentage={fundingPercentage} 
            label="Investment Progress"
          />
        </CardContent>
      </Card>
    </Link>
  );
}