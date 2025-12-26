# Cyprus Property Developer Website - Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Emaar.com**: Luxury real estate, premium feel, project showcases
- **Damac.com**: Modern layouts, investment focus, progress tracking
- **Style**: Modern Luxury + Mediterranean + Professional Real Estate

### Color Palette
- Primary: #1A4D2E (Deep Forest Green - trust, growth, Cyprus nature)
- Secondary: #F4F1DE (Warm Cream - Mediterranean warmth)
- Accent: #C1A875 (Gold - luxury, investment value)
- Dark: #2C3E50 (Charcoal - text, professional)
- Light: #FFFFFF (White - clean backgrounds)
- Progress: #4CAF50 (Green - funding progress bars)
- Text: #2C3E50 (Dark Gray), #6B7280 (Medium Gray - secondary)

### Typography
- Heading1: Playfair Display font-weight 700 (56px) - luxury, elegance
- Heading2: Playfair Display font-weight 600 (42px)
- Heading3: Montserrat font-weight 600 (32px)
- Heading4: Montserrat font-weight 600 (24px)
- Body/Normal: Montserrat font-weight 400 (16px)
- Body/Emphasis: Montserrat font-weight 600 (16px)
- Navigation: Montserrat font-weight 500 (16px)

### Key Component Styles
- **Buttons**: Gold background (#C1A875), white text, 8px rounded, hover: darken 10%
- **Cards**: White background, subtle shadow, 12px rounded, hover: lift 4px
- **Progress Bars**: Green fill (#4CAF50), cream background (#F4F1DE), 8px rounded, height 24px
- **Forms**: White inputs with border, focus: gold accent

### Layout & Spacing
- Hero section: Full viewport height with overlay text
- Project grid: 3 columns desktop, 2 tablet, 1 mobile, 32px gaps
- Section padding: 96px vertical, 80px horizontal (max-width 1400px)
- Card padding: 32px
- Progress bar with percentage label above

### Images to Generate
1. **hero-cyprus-luxury-development.jpg** - Aerial view of modern luxury apartments in Cyprus with Mediterranean sea in background, sunset lighting (Style: photorealistic, warm tones)
2. **project-beachfront-villas.jpg** - Modern white villas with infinity pools overlooking the sea, Cyprus coastline (Style: photorealistic, luxury architecture)
3. **project-city-apartments.jpg** - Contemporary high-rise apartment building in Limassol, glass facade, urban setting (Style: photorealistic, modern architecture)
4. **project-golf-resort.jpg** - Luxury golf resort development with clubhouse and villas, green landscape (Style: photorealistic, resort lifestyle)
5. **investment-growth-chart.jpg** - Professional business chart showing property investment growth, Cyprus map background (Style: photorealistic, business professional)
6. **cyprus-coastline-background.jpg** - Beautiful Cyprus Mediterranean coastline with blue waters and rocky shores (Style: photorealistic, natural beauty)
7. **about-team-office.jpg** - Modern professional office space with Cyprus views, business meeting (Style: photorealistic, corporate professional)
8. **logo-cyprus-property.png** - Elegant property developer logo with Cyprus element, minimal design (Style: vector-style, transparent background)

---

## Development Tasks

### 1. Setup & Structure
- Initialize shadcn-ui template ✓
- Update index.html title and meta tags
- Install additional dependencies if needed

### 2. Generate Images
- Create all 8 images using ImageCreator.generate_image following design guidelines
- Save to public/assets/ directory

### 3. Create Components
- **Navbar.tsx** - Navigation with logo, menu items (Home, Projects, Investors, About, Contact)
- **Footer.tsx** - Company info, contact details, social links
- **ProjectCard.tsx** - Reusable card showing project image, name, location, funding progress bar
- **ProgressBar.tsx** - Funding progress visualization with percentage
- **InvestorForm.tsx** - Contact form for investors

### 4. Homepage (src/pages/Index.tsx)
- Hero section with Cyprus luxury development image and CTA
- Featured projects section (3-4 projects with cards)
- Investment opportunity highlight
- Company stats (projects completed, funding raised, investors)
- Call-to-action section

### 5. Projects Page (src/pages/Projects.tsx)
- Grid of all projects with ProjectCard components
- Filter options (by status, location, type)
- Each card shows funding progress percentage

### 6. Project Detail Page (src/pages/ProjectDetail.tsx)
- Large image gallery
- Project information (location, size, type, timeline)
- Detailed funding progress with milestones
- Investment calculator
- Floor plans section
- Location map
- Contact form for inquiries

### 7. Investors Page (src/pages/Investors.tsx)
- Why invest in Cyprus section
- Investment process steps
- Returns and benefits
- Current opportunities
- Investor testimonials
- Contact form

### 8. About Page (src/pages/About.tsx)
- Company story and vision
- Team section
- Cyprus market insights
- Awards and certifications
- Contact information

### 9. Routing & Navigation
- Set up React Router for all pages
- Update App.tsx with routes

### 10. Styling & Responsiveness
- Apply design system throughout
- Ensure mobile responsiveness
- Add smooth scroll animations
- Implement hover effects

### 11. Testing & Build
- Run pnpm run lint
- Fix any errors
- Run pnpm run build
- Final check

### 12. UI Validation
- Use CheckUI.run to validate rendering
- Fix any issues if needed