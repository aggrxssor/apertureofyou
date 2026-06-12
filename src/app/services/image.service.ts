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
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-field.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-field.jpg',
      orientation: 'panorama',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-moon.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-moon.jpg',
      orientation: 'portrait',
    },
    {
      id: 'morocco.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco.jpg',
      orientation: 'landscape',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco2.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco3.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-path.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-path.jpg',
      orientation: 'landscape',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary10.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary10.jpg',
      orientation: 'ultrawide',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/morocco5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/morocco5.jpg',
      orientation: 'panorama',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague2.jpg',
      orientation: 'square',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain.jpg',
      orientation: 'portrait',
    },    
    {
      id: 'morocco4.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-angel.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-angel.jpg',
      orientation: 'landscape',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain6.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain6.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary4.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni2.jpg',
      orientation: 'landscape',
    },
    
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary5.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary6.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary6.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary3.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague.jpg',
      orientation: 'landscape',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague4.jpg',
      orientation: 'landscape',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary8.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary8.jpg',
      orientation: 'panorama',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/prague3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/prague3.jpg',
      orientation: 'landscape',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary2.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain2.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary7.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary7.jpg',
      orientation: 'square',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain4.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain4.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/spain5.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/spain5.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/chris.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/chris.jpg',
      orientation: 'portrait'
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/chris2.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/chris2.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/hungary11.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/hungary11.jpg',
      orientation: 'portrait',
    },
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/huni3.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/huni3.jpg',
      orientation: 'portrait',
    },
    
    


  ];

  private readonly galleryImages: SiteImage[] = [
    {
      id: 'tatra-field.jpg',
      title: '',
      alt: 'Panoramic portfolio photograph',
      thumbnailUrl: '/assets/thumbnails/portfolio/tatra-field.jpg',
      midSizedUrl: '/assets/mid-sized/portfolio/tatra-field.jpg',
      orientation: 'panorama',
    },
  ];

  getPortfolioImages(): SiteImage[] {
    return this.portfolioImages;
  }

  getGalleryImages(): SiteImage[] {
    return this.galleryImages;
  }
}
