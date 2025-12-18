# Photo Gallery Implementation

## Overview
This document describes the photo gallery implementation for the Școala Primară and Grădinița sections of the Teofil website.

## Features

### PhotoGallery Component
Location: `/src/components/widgets/PhotoGallery.astro`

A reusable, responsive photo gallery component with the following features:

- **Responsive Grid Layout**: Automatically adjusts from 1 column on mobile to 2, 3, or 4 columns on larger screens
- **Built-in Lightbox**: Click any image to view it in full-screen mode
- **Keyboard Navigation**: 
  - `Escape` to close the lightbox
  - `←` / `→` arrow keys to navigate between images
- **Smooth Animations**: Fade-in effects as images enter the viewport
- **Hover Effects**: Images scale slightly on hover with optional caption overlay
- **Optimized Images**: Uses Astro's built-in image optimization for fast loading
- **Lazy Loading**: Images below the fold are lazy-loaded for better performance

### Gallery Pages

#### Școala Primară Gallery
- **Location**: `/src/pages/scoala-primara/galerie-foto.astro`
- **Images**: `/src/assets/images/galerie/scoala-primara/`
- **Count**: 46 unique images (92 files with thumbnails)

#### Grădinița Gallery
- **Location**: `/src/pages/gradinita/galerie-foto.astro`
- **Images**: `/src/assets/images/galerie/gradinita/`
- **Count**: 88 unique images (176 files with thumbnails)

## Usage

### Basic Usage

```astro
---
import PhotoGallery from '~/components/widgets/PhotoGallery.astro';

// Import all images from a directory
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/galerie/your-folder/*.jpg',
  { eager: true }
);

// Filter out thumbnails and prepare gallery data
const galleryImages = Object.entries(images)
  .filter(([path]) => !path.includes('-150x150'))
  .map(([path, module]) => ({
    src: module.default,
    alt: 'Your alt text',
    caption: 'Optional caption', // Optional
  }));
---

<PhotoGallery
  title="Gallery Title"
  subtitle="Gallery description"
  images={galleryImages}
  columns={3}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Gallery title |
| `subtitle` | string | - | Gallery subtitle/description |
| `tagline` | string | - | Optional tagline above title |
| `images` | Array | [] | Array of image objects |
| `columns` | 2 \| 3 \| 4 | 3 | Number of columns in the grid |
| `id` | string | - | Optional ID for the widget |
| `isDark` | boolean | false | Dark mode styling |
| `classes` | object | {} | Custom CSS classes |

### Image Object Structure

```typescript
{
  src: ImageMetadata,    // Astro image import
  alt: string,           // Alt text for accessibility
  caption?: string       // Optional caption shown on hover and in lightbox
}
```

## Customization

### Changing Column Layout

Modify the `columns` prop:
```astro
<PhotoGallery columns={4} {...otherProps} />
```

### Adding Captions

Include captions in the image data:
```astro
const galleryImages = [{
  src: image1,
  alt: 'Description',
  caption: 'This caption appears on hover and in lightbox'
}];
```

### Styling

The component uses Tailwind CSS classes. You can customize:
- Grid gaps: Modify `gap-4 md:gap-6` in the grid container
- Aspect ratio: Change `aspect-square` to `aspect-video` or remove for auto height
- Hover effects: Adjust `group-hover:scale-110` for different zoom levels
- Animation timing: Modify `duration-300` values

## Technical Details

### Image Optimization
- Uses Astro's built-in `<Image>` component
- Generates responsive images at multiple sizes
- Automatically serves WebP/AVIF formats where supported
- Lazy loads images below the fold

### Lightbox Implementation
- Pure CSS and vanilla JavaScript (no external dependencies)
- Uses URL hash for navigation (enables browser back button)
- Keyboard accessible
- Click outside to close
- Smooth transitions

### Performance
- Only first 6 images use `loading="eager"`
- All other images lazy load
- Intersection Observer for scroll animations
- Optimized image sizes for different viewports

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive on all screen sizes
- Keyboard and touch navigation

## Future Enhancements

Possible improvements:
- Add image filtering/categories
- Include EXIF data display
- Add share functionality
- Implement image download option
- Add fullscreen API support
- Include swipe gestures for mobile
