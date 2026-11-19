import { Component } from '@angular/core';
import { ImageService, SiteImage } from '../../services/image.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  readonly images: SiteImage[];
  selectedImage: SiteImage | null = null;
  selectedImageAspectRatio: number | null = null;
  
  devMode: boolean = false;

  constructor(private readonly imageService: ImageService) {
    this.images = this.imageService.getPortfolioImages();
  }

  openImage(image: SiteImage, event: MouseEvent): void {
    const thumbnail = event.currentTarget instanceof HTMLElement
      ? event.currentTarget.querySelector('img')
      : null;
    const width = thumbnail?.naturalWidth ?? 0;
    const height = thumbnail?.naturalHeight ?? 0;
    this.selectedImageAspectRatio = width && height
      ? width / height
      : this.getFallbackAspectRatio(image);
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
    this.selectedImageAspectRatio = null;
  }

  private getFallbackAspectRatio(image: SiteImage): number {
    switch (image.orientation) {
      case 'portrait': return 2 / 3;
      case 'landscape': return 3 / 2;
      case 'panorama': return 2.4;
      case 'ultrawide': return 3;
      case 'square': return 1;
      default: return 1;
    }
  }
}