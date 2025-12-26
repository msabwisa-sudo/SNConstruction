import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function InvestorForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Thank you for your interest!',
      description: 'Our investment team will contact you within 24 hours.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      investmentAmount: '',
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

  return (
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
        <Label htmlFor="investmentAmount" className="font-montserrat font-medium text-[#2C3E50]">
          Investment Amount (EUR)
        </Label>
        <Input
          id="investmentAmount"
          name="investmentAmount"
          type="text"
          placeholder="e.g., 250,000"
          value={formData.investmentAmount}
          onChange={handleChange}
          className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
        />
      </div>

      <div>
        <Label htmlFor="message" className="font-montserrat font-medium text-[#2C3E50]">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 border-[#C1A875] focus:ring-[#C1A875]"
          placeholder="Tell us about your investment goals..."
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#C1A875] hover:bg-[#A68F5F] text-white font-montserrat font-semibold py-6 text-lg"
      >
        Submit Inquiry
      </Button>
    </form>
  );
}