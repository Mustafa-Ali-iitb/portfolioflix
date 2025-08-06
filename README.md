# PortfolioFlix - Netflix-Style Personal Portfolio

A stunning personal portfolio website that recreates the Netflix user experience with a professional twist. Built with React, Tailwind CSS, and Framer Motion for smooth animations and responsive design.

## 🎯 Features

- **Netflix-Inspired Design**: Dark theme with red accents and smooth animations
- **Interactive Carousels**: Horizontal scrollable sections for Education, Experience, Projects, and Interests
- **Hover Previews**: Cards expand and show additional information on hover
- **Modal Details**: Click any card to view comprehensive details in a Netflix-style modal
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for professional-grade transitions
- **Performance Optimized**: Fast loading times and smooth interactions

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd portfolioflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view your portfolio

## 📁 Project Structure

```
portfolioflix/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── HeroBanner.jsx   # Hero section
│   │   ├── CarouselRow.jsx  # Horizontal scrolling rows
│   │   ├── CardTile.jsx     # Individual cards
│   │   ├── ModalPreview.jsx # Detail modals
│   │   └── Footer.jsx       # Footer with contact info
│   ├── data/               # JSON data files
│   │   ├── education.json   # Education data
│   │   ├── experience.json  # Work experience
│   │   ├── projects.json    # Project portfolio
│   │   └── interests.json   # Personal interests
│   ├── App.jsx             # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
│   └── assets/           # Images and media files
│       ├── education/    # Education thumbnails
│       ├── experience/   # Company logos
│       ├── projects/     # Project screenshots
│       └── interests/    # Interest images
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js       # Vite build configuration
└── README.md            # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Update Hero Banner** (`src/components/HeroBanner.jsx`):
- Line 21: Change "Your Name" to your actual name
- Line 30: Update your title/role
- Line 37-39: Modify your bio description

**Update Footer** (`src/components/Footer.jsx`):
- Line 67: Update the email address
- Line 88: Change "Your Name" in copyright
- Lines 12-35: Update social media links

### 2. Data Content

All content is stored in JSON files in the `src/data/` directory:

**Education** (`src/data/education.json`):
```json
{
  "title": "Your Degree",
  "institution": "Your School",
  "period": "2020-2024",
  "description": "Description of your education",
  "achievements": ["Achievement 1", "Achievement 2"]
}
```

**Experience** (`src/data/experience.json`):
```json
{
  "title": "Your Job Title",
  "company": "Company Name",
  "period": "2022-Present",
  "description": "What you did in this role",
  "techStack": ["React", "Node.js", "AWS"]
}
```

**Projects** (`src/data/projects.json`):
```json
{
  "title": "Project Name",
  "description": "Brief description",
  "techStack": ["React", "Python"],
  "github": "https://github.com/username/repo",
  "demo": "https://your-demo.com"
}
```

**Interests** (`src/data/interests.json`):
```json
{
  "title": "Interest Name",
  "description": "Why you're passionate about this",
  "achievements": ["What you've accomplished"]
}
```

### 3. Images and Media

Replace placeholder images in the `public/assets/` directory:

- **Education**: Add school logos/photos
- **Experience**: Add company logos
- **Projects**: Add project screenshots or demos
- **Interests**: Add relevant images

**Image Guidelines**:
- Format: JPG, PNG, or WebP
- Size: 300x200px for thumbnails (maintain 3:2 aspect ratio)
- Optimize images for web to ensure fast loading

### 4. Color Scheme

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  netflix: {
    red: '#E50914',     // Primary red color
    black: '#141414',   // Main background
    dark: '#000000',    // Pure black
    gray: {             // Various gray shades
      100: '#f8f8f8',
      // ... more gray variations
    }
  }
}
```

To change colors, modify these values and the colors will update throughout the site.

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify's deploy page

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolioflix",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🛠️ Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎥 Adding Videos

To add demo videos for projects:

1. Place video files in `public/assets/projects/`
2. Update the `previewVideo` field in `projects.json`
3. Ensure videos are optimized (MP4, H.264, under 10MB)

## 📱 Mobile Optimization

The site is fully responsive with:
- Stacked layouts on mobile
- Touch-optimized interactions
- Optimized image loading
- Accessible navigation

## 🔧 Troubleshooting

**Common Issues**:

1. **Images not loading**: Check file paths in JSON data match actual files
2. **Animations not working**: Ensure Framer Motion is properly installed
3. **Build errors**: Check for missing dependencies with `npm install`
4. **Styling issues**: Verify Tailwind CSS is configured correctly

**Performance Tips**:
- Optimize images before adding them
- Lazy load images for better performance
- Use WebP format when possible
- Keep animations lightweight

## 🎨 Customization Ideas

- Add a blog section with markdown support
- Implement dark/light theme toggle
- Add language switching capability
- Include a contact form with backend integration
- Add resume download functionality
- Implement search and filtering for projects

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio. If you make improvements, consider sharing them back with the community!

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**