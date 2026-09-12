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
  private readonly portfolioImages: SiteImage[] = 
    [
  {
    id: 'morocco4',
    title: '',
    alt: 'morocco4',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco4.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco4.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'morocco6',
    title: '',
    alt: 'morocco6',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco6.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco6.jpg',
    orientation: 'portrait',
    location: 'morocco'
  },
  {
    id: 'morocco',
    title: '',
    alt: 'morocco',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'morocco13',
    title: '',
    alt: 'morocco13',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco13.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco13.jpg',
    orientation: 'square',
    location: 'morocco'
  },
  {
    id: 'morocco8',
    title: '',
    alt: 'morocco8',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco8.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco8.jpg',
    orientation: 'square',
    location: 'morocco'
  },
  {
    id: 'morocco5',
    title: '',
    alt: 'morocco5',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco5.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco5.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'hungary15',
    title: '',
    alt: 'hungary15',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary15.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary15.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'hungary16',
    title: '',
    alt: 'hungary16',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary16.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary16.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'morocco2',
    title: '',
    alt: 'morocco2',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco2.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco2.jpg',
    orientation: 'portrait',
    location: 'morocco'
  },
  {
    id: 'tatra-angel',
    title: '',
    alt: 'tatra-angel',
    thumbnailUrl: 'assets/thumbnails/portfolio/tatra-angel.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/tatra-angel.jpg',
    orientation: 'landscape',
    location: 'slovakia'
  },
  {
    id: 'morocco14',
    title: '',
    alt: 'morocco14',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco14.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco14.jpg',
    orientation: 'square',
    location: 'morocco'
  },
  {
    id: 'tatra-moon',
    title: '',
    alt: 'tatra-moon',
    thumbnailUrl: 'assets/thumbnails/portfolio/tatra-moon.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/tatra-moon.jpg',
    orientation: 'portrait',
    location: 'slovakia'
  },
  {
    id: 'tatra-path',
    title: '',
    alt: 'tatra-path',
    thumbnailUrl: 'assets/thumbnails/portfolio/tatra-path.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/tatra-path.jpg',
    orientation: 'square',
    location: 'slovakia'
  },
  {
    id: 'tatra-field',
    title: '',
    alt: 'tatra-field',
    thumbnailUrl: 'assets/thumbnails/portfolio/tatra-field.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/tatra-field.jpg',
    orientation: 'panorama',
    location: 'slovakia'
  },
  {
    id: 'morocco12',
    title: '',
    alt: 'morocco12',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco12.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco12.jpg',
    orientation: 'portrait',
    location: 'morocco'
  },
  {
    id: 'morocco10',
    title: '',
    alt: 'morocco10',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco10.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco10.jpg',
    orientation: 'portrait',
    location: 'morocco'
  },
  {
    id: 'morocco7',
    title: '',
    alt: 'morocco7',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco7.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco7.jpg',
    orientation: 'portrait',
    location: 'morocco'
  },
  {
    id: 'morocco11',
    title: '',
    alt: 'morocco11',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco11.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco11.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'morocco15',
    title: '',
    alt: 'morocco15',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco15.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco15.jpg',
    orientation: 'square',
    location: 'morocco'
  },
  {
    id: 'spain6',
    title: '',
    alt: 'spain6',
    thumbnailUrl: 'assets/thumbnails/portfolio/spain6.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/spain6.jpg',
    orientation: 'portrait',
    location: 'spain'
  },
  {
    id: 'morocco17',
    title: '',
    alt: 'morocco17',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco17.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco17.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'morocco3',
    title: '',
    alt: 'morocco3',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco3.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco3.jpg',
    orientation: 'portrait',
    location: 'morocco'
  },
  {
    id: 'spain',
    title: '',
    alt: 'spain',
    thumbnailUrl: 'assets/thumbnails/portfolio/spain.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/spain.jpg',
    orientation: 'portrait',
    location: 'spain'
  },
  {
    id: 'morocco16',
    title: '',
    alt: 'morocco16',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco16.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco16.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'morocco9',
    title: '',
    alt: 'morocco9',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco9.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco9.jpg',
    orientation: 'square',
    location: 'morocco'
  },
  {
    id: 'hungary10',
    title: '',
    alt: 'hungary10',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary10.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary10.jpg',
    orientation: 'ultrawide',
    location: 'hungary'
  },
  {
    id: 'morocco18',
    title: '',
    alt: 'morocco18',
    thumbnailUrl: 'assets/thumbnails/portfolio/morocco18.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/morocco18.jpg',
    orientation: 'landscape',
    location: 'morocco'
  },
  {
    id: 'prague4',
    title: '',
    alt: 'prague4',
    thumbnailUrl: 'assets/thumbnails/portfolio/prague4.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/prague4.jpg',
    orientation: 'landscape',
    location: 'czechia'
  },
  {
    id: 'hungary6',
    title: '',
    alt: 'hungary6',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary6.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary6.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'hungary7',
    title: '',
    alt: 'hungary7',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary7.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary7.jpg',
    orientation: 'square',
    location: 'hungary'
  },
  {
    id: 'hungary8',
    title: '',
    alt: 'hungary8',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary8.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary8.jpg',
    orientation: 'panorama',
    location: 'hungary'
  },
  {
    id: 'hungary3',
    title: '',
    alt: 'hungary3',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary3.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary3.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'hungary4',
    title: '',
    alt: 'hungary4',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary4.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary4.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'spain2',
    title: '',
    alt: 'spain2',
    thumbnailUrl: 'assets/thumbnails/portfolio/spain2.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/spain2.jpg',
    orientation: 'portrait',
    location: 'spain'
  },
  {
    id: 'spain4',
    title: '',
    alt: 'spain4',
    thumbnailUrl: 'assets/thumbnails/portfolio/spain4.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/spain4.jpg',
    orientation: 'portrait',
    location: 'spain'
  },
  {
    id: 'spain3',
    title: '',
    alt: 'spain3',
    thumbnailUrl: 'assets/thumbnails/portfolio/spain3.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/spain3.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'prague3',
    title: '',
    alt: 'prague3',
    thumbnailUrl: 'assets/thumbnails/portfolio/prague3.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/prague3.jpg',
    orientation: 'landscape',
    location: 'czechia'
  },
  {
    id: 'hungary11',
    title: '',
    alt: 'hungary11',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary11.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary11.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'chris',
    title: '',
    alt: 'chris',
    thumbnailUrl: 'assets/thumbnails/portfolio/chris.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/chris.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'huni',
    title: '',
    alt: 'huni',
    thumbnailUrl: 'assets/thumbnails/portfolio/huni.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/huni.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'prague',
    title: '',
    alt: 'prague',
    thumbnailUrl: 'assets/thumbnails/portfolio/prague.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/prague.jpg',
    orientation: 'landscape',
    location: 'czechia'
  },
  {
    id: 'huni2',
    title: '',
    alt: 'huni2',
    thumbnailUrl: 'assets/thumbnails/portfolio/huni2.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/huni2.jpg',
    orientation: 'landscape',
    location: 'hungary'
  },
  {
    id: 'chris2',
    title: '',
    alt: 'chris2',
    thumbnailUrl: 'assets/thumbnails/portfolio/chris2.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/chris2.jpg',
    orientation: 'portrait',
    location: 'spain'
  },
  {
    id: 'hungary2',
    title: '',
    alt: 'hungary2',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary2.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary2.jpg',
    orientation: 'portrait',
    location: 'hungary'
  },
  {
    id: 'spain5',
    title: '',
    alt: 'spain5',
    thumbnailUrl: 'assets/thumbnails/portfolio/spain5.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/spain5.jpg',
    orientation: 'portrait',
    location: 'spain'
  },
  {
    id: 'hungary5',
    title: '',
    alt: 'hungary5',
    thumbnailUrl: 'assets/thumbnails/portfolio/hungary5.jpg',
    midSizedUrl: 'assets/mid-sized/portfolio/hungary5.jpg',
    orientation: 'portrait',
    location: 'hungary'
  }

  ];

  private readonly galleryImages: SiteImage[] = [
    {
      id: 'morocco4',
      title: '',
      alt: 'morocco4',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco4.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco4.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'morocco6',
      title: '',
      alt: 'morocco6',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco6.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco6.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'morocco18',
      title: '',
      alt: 'morocco18',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco18.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco18.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'morocco15',
      title: '',
      alt: 'morocco15',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco15.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco15.jpg',
      orientation: 'square',
      location: 'morocco'
    },
    {
      id: 'morocco14',
      title: '',
      alt: 'morocco14',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco14.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco14.jpg',
      orientation: 'square',
      location: 'morocco'
    },
    {
      id: 'morocco7',
      title: '',
      alt: 'morocco7',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco7.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco7.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'morocco13',
      title: '',
      alt: 'morocco13',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco13.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco13.jpg',
      orientation: 'square',
      location: 'morocco'
    },
    {
      id: 'morocco12',
      title: '',
      alt: 'morocco12',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco12.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco12.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'morocco10',
      title: '',
      alt: 'morocco10',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco10.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco10.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'morocco17',
      title: '',
      alt: 'morocco17',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco17.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco17.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'morocco16',
      title: '',
      alt: 'morocco16',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco16.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco16.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    
    {
      id: 'morocco3',
      title: '',
      alt: 'morocco3',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco3.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco3.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'morocco9',
      title: '',
      alt: 'morocco9',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco9.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco9.jpg',
      orientation: 'square',
      location: 'morocco'
    },
    {
      id: 'morocco11',
      title: '',
      alt: 'morocco11',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco11.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco11.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'tatra-field',
      title: '',
      alt: 'tatra-field',
      thumbnailUrl: 'assets/thumbnails/portfolio/tatra-field.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/tatra-field.jpg',
      orientation: 'panorama',
      location: 'slovakia'
    },
    {
      id: 'tatra-moon',
      title: '',
      alt: 'tatra-moon',
      thumbnailUrl: 'assets/thumbnails/portfolio/tatra-moon.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/tatra-moon.jpg',
      orientation: 'portrait',
      location: 'slovakia'
    },
    {
      id: 'morocco',
      title: '',
      alt: 'morocco',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'morocco2',
      title: '',
      alt: 'morocco2',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco2.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco2.jpg',
      orientation: 'portrait',
      location: 'morocco'
    },
    {
      id: 'tatra-path',
      title: '',
      alt: 'tatra-path',
      thumbnailUrl: 'assets/thumbnails/portfolio/tatra-path.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/tatra-path.jpg',
      orientation: 'square',
      location: 'slovakia'
    },
    {
      id: 'hungary15',
      title: '',
      alt: 'hungary15',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary15.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary15.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'hungary15',
      title: '',
      alt: 'hungary15',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary13.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary13.jpg',
      orientation: 'panorama',
      location: 'hungary'
    },
    {
      id: 'hungary10',
      title: '',
      alt: 'hungary10',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary10.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary10.jpg',
      orientation: 'ultrawide',
      location: 'hungary'
    },
    {
      id: 'morocco5',
      title: '',
      alt: 'morocco5',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco5.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco5.jpg',
      orientation: 'landscape',
      location: 'morocco'
    },
    {
      id: 'spain',
      title: '',
      alt: 'spain',
      thumbnailUrl: 'assets/thumbnails/portfolio/spain.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/spain.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    
    {
      id: 'morocco8',
      title: '',
      alt: 'morocco8',
      thumbnailUrl: 'assets/thumbnails/portfolio/morocco8.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/morocco8.jpg',
      orientation: 'square',
      location: 'morocco'
    },
    {
      id: 'tatra-angel',
      title: '',
      alt: 'tatra-angel',
      thumbnailUrl: 'assets/thumbnails/portfolio/tatra-angel.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/tatra-angel.jpg',
      orientation: 'landscape',
      location: 'slovakia'
    },
    {
      id: 'spain6',
      title: '',
      alt: 'spain6',
      thumbnailUrl: 'assets/thumbnails/portfolio/spain6.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/spain6.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'hungary4',
      title: '',
      alt: 'hungary4',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary4.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary4.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'huni2',
      title: '',
      alt: 'huni2',
      thumbnailUrl: 'assets/thumbnails/portfolio/huni2.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/huni2.jpg',
      orientation: 'landscape',
      location: 'hungary'
    },
    {
      id: 'hungary16',
      title: '',
      alt: 'hungary16',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary16.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary16.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },    
    {
      id: 'hungary6',
      title: '',
      alt: 'hungary6',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary6.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary6.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'hungary3',
      title: '',
      alt: 'hungary3',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary3.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'prague',
      title: '',
      alt: 'prague',
      thumbnailUrl: 'assets/thumbnails/portfolio/prague.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/prague.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'prague4',
      title: '',
      alt: 'prague4',
      thumbnailUrl: 'assets/thumbnails/portfolio/prague4.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/prague4.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'prague2',
      title: '',
      alt: 'prague2',
      thumbnailUrl: 'assets/thumbnails/portfolio/prague2.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/prague2.jpg',
      orientation: 'square',
      location: 'czechia'
    },
    {
      id: 'hungary8',
      title: '',
      alt: 'hungary8',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary8.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary8.jpg',
      orientation: 'panorama',
      location: 'hungary'
    },
    
    {
      id: 'hungary14',
      title: '',
      alt: 'hungary14',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary14.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary14.jpg',
      orientation: 'landscape',
      location: 'hungary'
    },
    {
      id: 'prague3',
      title: '',
      alt: 'prague3',
      thumbnailUrl: 'assets/thumbnails/portfolio/prague3.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/prague3.jpg',
      orientation: 'landscape',
      location: 'czechia'
    },
    {
      id: 'hungary2',
      title: '',
      alt: 'hungary2',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary2.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary2.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'spain2',
      title: '',
      alt: 'spain2',
      thumbnailUrl: 'assets/thumbnails/portfolio/spain2.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/spain2.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'hungary7',
      title: '',
      alt: 'hungary7',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary7.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary7.jpg',
      orientation: 'square',
      location: 'hungary'
    },
    
    {
      id: 'hungary15',
      title: '',
      alt: 'hungary15',
      thumbnailUrl: 'assets/thumbnails/portfolio/huni3.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/huni3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'huni',
      title: '',
      alt: 'huni',
      thumbnailUrl: 'assets/thumbnails/portfolio/huni.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/huni.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    
    {
      id: 'spain4',
      title: '',
      alt: 'spain4',
      thumbnailUrl: 'assets/thumbnails/portfolio/spain4.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/spain4.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'spain5',
      title: '',
      alt: 'spain5',
      thumbnailUrl: 'assets/thumbnails/portfolio/spain5.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/spain5.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'chris',
      title: '',
      alt: 'chris',
      thumbnailUrl: 'assets/thumbnails/portfolio/chris.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/chris.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'hungary5',
      title: '',
      alt: 'hungary5',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary5.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary5.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'chris2',
      title: '',
      alt: 'chris2',
      thumbnailUrl: 'assets/thumbnails/portfolio/chris2.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/chris2.jpg',
      orientation: 'portrait',
      location: 'spain'
    },
    {
      id: 'hungary11',
      title: '',
      alt: 'hungary11',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary11.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary11.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'spain3',
      title: '',
      alt: 'spain3',
      thumbnailUrl: 'assets/thumbnails/portfolio/spain3.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/spain3.jpg',
      orientation: 'portrait',
      location: 'hungary'
    },
    {
      id: 'hungary15',
      title: '',
      alt: 'hungary15',
      thumbnailUrl: 'assets/thumbnails/portfolio/hungary12.jpg',
      midSizedUrl: 'assets/mid-sized/portfolio/hungary12.jpg',
      orientation: 'panorama',
      location: 'hungary'
    },
  ];

  getPortfolioImages(): SiteImage[] {
    return this.portfolioImages;
  }

  getGalleryImages(): SiteImage[] {
    return this.galleryImages;
  }
}
