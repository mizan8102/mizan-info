# 📖 Old Book Reader

A beautiful, interactive React component that creates an immersive digital book reading experience. Built with React, TypeScript, Tailwind CSS, and Framer Motion, it combines the tactile beauty of traditional books with modern web technology.

![Old Book Reader Demo](https://via.placeholder.com/800x400/8B4513/FFFFFF?text=Old+Book+Reader+Demo)

## ✨ Features

- **📱 Responsive Design**: Two-page spread on wide screens, single page on mobile
- **🎨 Beautiful Animations**: Smooth page-turning effects with Framer Motion
- **⌨️ Multiple Navigation**: Click, keyboard arrows, touch gestures, and progress bar
- **♿ Accessibility**: Full ARIA support, keyboard navigation, screen reader friendly
- **🎛️ Customizable**: Extensive theming options and configuration props
- **📄 HTML Content**: Renders rich HTML content with proper styling
- **🖼️ Image Support**: Lazy-loaded images with elegant styling
- **📊 Progress Tracking**: Visual progress bar and page indicators

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd old-book-reader

# Install dependencies
npm install

# Start the development server
npm start
```

### Basic Usage

```tsx
import { OldBookReader } from './components/OldBookReader';
import { BookPage } from './hooks/useBookPagination';

const pages: BookPage[] = [
  {
    id: 'page-1',
    title: 'Chapter 1',
    content: '<h1>Welcome</h1><p>This is the first page of our book...</p>',
    image: 'https://example.com/image.jpg'
  },
  // ... more pages
];

function App() {
  return (
    <OldBookReader
      pages={pages}
      startPage={0}
      onPageChange={(pageIndex) => console.log(`Page ${pageIndex + 1}`)}
      animationType="flip"
    />
  );
}
```

## 📚 Component API

### OldBookReader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pages` | `BookPage[]` | **required** | Array of book pages |
| `startPage` | `number` | `0` | Initial page index |
| `onPageChange` | `(pageIndex: number) => void` | `undefined` | Callback when page changes |
| `animationType` | `'flip' \| 'fade'` | `'flip'` | Page transition animation |
| `showPageNumbers` | `boolean` | `true` | Show page numbers |
| `showChapterTitle` | `boolean` | `true` | Show chapter titles in header |
| `showNavigation` | `boolean` | `true` | Show navigation buttons |
| `showProgress` | `boolean` | `true` | Show progress bar |
| `paperColor` | `string` | `'#f7f3e9'` | Background color of pages |
| `textureOpacity` | `number` | `0.1` | Opacity of paper texture |
| `fontSizes` | `FontSizes` | `{}` | Custom font sizes |
| `cornerRadius` | `string` | `'8px'` | Page corner radius |
| `spineWidth` | `string` | `'12px'` | Width of book spine |
| `className` | `string` | `''` | Additional CSS classes |

### BookPage Interface

```typescript
interface BookPage {
  id: string;           // Unique identifier
  title?: string;       // Optional chapter title
  content: string;      // HTML content (will be sanitized)
  image?: string;       // Optional image URL
}
```

### FontSizes Interface

```typescript
interface FontSizes {
  base?: string;        // Base font size (default: 16px)
  small?: string;       // Small font size (default: 14px)
  large?: string;       // Large font size (default: 18px)
}
```

## 🎨 Theming & Customization

### CSS Custom Properties

The component uses CSS custom properties for easy theming:

```css
:root {
  --book-paper-color: #f7f3e9;        /* Page background color */
  --book-text-color: #2c1810;         /* Text color */
  --book-shadow-color: rgba(0,0,0,0.3); /* Shadow color */
  --book-spine-color: #8b4513;        /* Book spine color */
  --book-corner-radius: 8px;          /* Page corner radius */
  --book-spine-width: 12px;           /* Spine width */
  --book-texture-opacity: 0.1;        /* Paper texture opacity */
  --book-vignette-opacity: 0.3;       /* Vignette effect opacity */
  --book-font-size-base: 16px;        /* Base font size */
  --book-font-size-small: 14px;       /* Small font size */
  --book-font-size-large: 18px;       /* Large font size */
  --book-line-height: 1.6;            /* Line height */
  --book-page-padding: 2rem;          /* Page content padding */
  --book-gutter-width: 2rem;          /* Gap between pages */
}
```

### Custom Styling

```tsx
<OldBookReader
  pages={pages}
  paperColor="#f0f0f0"
  textureOpacity={0.2}
  fontSizes={{
    base: "18px",
    small: "16px",
    large: "22px"
  }}
  cornerRadius="12px"
  spineWidth="16px"
  className="my-custom-book"
/>
```

## 🎮 Navigation Methods

### Mouse/Touch Navigation
- **Click left side**: Previous page
- **Click right side**: Next page
- **Click progress bar**: Jump to specific page
- **Swipe left/right**: Touch gesture navigation

### Keyboard Navigation
- **← (Left Arrow)**: Previous page
- **→ (Right Arrow)**: Next page

### Programmatic Navigation
```tsx
const { goToPage, goToNextPage, goToPrevPage } = useBookPagination({
  pages,
  onPageChange: (pageIndex) => console.log(`Page ${pageIndex + 1}`)
});

// Navigate to specific page
goToPage(5);

// Navigate to next/previous page
goToNextPage();
goToPrevPage();
```

## ♿ Accessibility Features

- **ARIA Roles**: Proper semantic roles for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Live regions for page changes
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **High Contrast**: Sufficient color contrast ratios

## 📱 Responsive Behavior

### Wide Screens (>768px)
- Two-page spread layout
- Left and right pages visible
- Book spine between pages
- Hover-activated navigation buttons

### Mobile Screens (≤768px)
- Single page layout
- Always-visible navigation buttons
- Touch gesture support
- Optimized spacing and typography

## 🔧 Development

### Project Structure

```
src/
├── components/
│   ├── OldBookReader.tsx      # Main component
│   └── ui/                    # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
├── hooks/
│   └── useBookPagination.ts   # Pagination logic
├── styles/
│   └── book-theme.css         # Theme styles
├── data/
│   └── samplePages.ts         # Sample content
└── lib/
    └── utils.ts               # Utility functions
```

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🛠️ Dependencies

### Core Dependencies
- **React 18**: UI library
- **TypeScript**: Type safety
- **Framer Motion**: Animations
- **Tailwind CSS**: Styling
- **shadcn/ui**: UI components

### Development Dependencies
- **Create React App**: Build tooling
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🔒 Security Considerations

### HTML Sanitization
The component renders HTML content using `dangerouslySetInnerHTML`. For production use, consider implementing proper HTML sanitization:

```tsx
import DOMPurify from 'dompurify';

const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html);
};
```

## 🎯 Performance Optimizations

- **Lazy Loading**: Images are loaded on demand
- **Virtual Scrolling**: Only visible pages are rendered (future enhancement)
- **Animation Optimization**: Hardware-accelerated transforms
- **Memory Management**: Proper cleanup of event listeners

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check CORS settings and image URLs
2. **Animations not working**: Ensure Framer Motion is properly installed
3. **Styling issues**: Verify Tailwind CSS is configured correctly
4. **TypeScript errors**: Check that all types are properly imported

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🙏 Acknowledgments

- Inspired by traditional book design
- Built with modern web technologies
- Accessibility guidance from WCAG 2.1
- Animation inspiration from Framer Motion examples

---

**Happy Reading! 📚✨**
