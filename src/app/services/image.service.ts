import { Injectable } from '@angular/core';

export type ImageOrientation = 'portrait' | 'landscape' | 'panorama' | 'ultrawide' | 'square';

export interface SiteImage {
  id: string;
  title: string;
  alt: string;
  resolution?: string;
  size?: string;
  location?: string;
  thumbnailUrl: string;
  midSizedUrl: string;
  orientation: ImageOrientation;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly portfolioImages: SiteImage[] = [
    {
      id: 'tatra-angle.jpg',
      title: '',
      alt: '...',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco4.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-field.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-field.jpg',
      orientation: 'panorama',
      location: 'slovakia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-moon.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-moon.jpg',
      orientation: 'portrait',
      location: 'slovakia'
    },
    {
      id: 'morocco.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco2.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco3.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-path.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-path.jpg',
      orientation: 'landscape',
      location: 'slovakia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary10.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary10.jpg',
      orientation: 'ultrawide',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco5.jpg',
      orientation: 'panorama',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague2.jpg',
      orientation: 'square',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain.jpg',
      orientation: 'portrait',
      location: 'spain'
    },    
    {
      id: 'morocco4.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-angel.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-angel.jpg',
      orientation: 'landscape',
      location: 'slovakia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain6.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain6.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary4.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni2.jpg',
      orientation: 'landscape',
      location: 'hungary'
    },
    
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary5.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary6.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary6.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague4.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary8.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary8.jpg',
      orientation: 'panorama',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague3.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary2.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain2.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary7.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary7.jpg',
      orientation: 'square',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain4.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain5.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/chris.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/chris.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/chris2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/chris2.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary11.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary11.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },

  ];

  private readonly galleryImages: SiteImage[] = [
    {
      id: 'tatra-angle.jpg',
      title: '',
      alt: '...',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco4.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-field.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-field.jpg',
      orientation: 'panorama',
      location: 'slovakia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-moon.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-moon.jpg',
      orientation: 'portrait',
      location: 'slovakia'
    },
    {
      id: 'morocco.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco2.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco3.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-path.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-path.jpg',
      orientation: 'landscape',
      location: 'slovakia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary10.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary10.jpg',
      orientation: 'ultrawide',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco5.jpg',
      orientation: 'panorama',
      location: 'morocco'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague2.jpg',
      orientation: 'square',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain.jpg',
      orientation: 'portrait',
      location: 'spain'
    },    
    {
      id: 'morocco4.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-angel.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-angel.jpg',
      orientation: 'landscape',
      location: 'slovakia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain6.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain6.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary4.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni2.jpg',
      orientation: 'landscape',
      location: 'hungary'
    },
    
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary5.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary6.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary6.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague4.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary8.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary8.jpg',
      orientation: 'panorama',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague3.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary2.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain2.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary7.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary7.jpg',
      orientation: 'square',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain4.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain5.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/chris.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/chris.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/chris2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/chris2.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary11.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary11.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain3.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
  ];

  getPortfolioImages(): SiteImage[] {
    return this.portfolioImages;
  }

  getGalleryImages(): SiteImage[] {
    return this.galleryImages;
  }
}
