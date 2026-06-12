import { Component } from '@angular/core';
import { ImageService, SiteImage } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  readonly images: SiteImage[];
  selectedImage: SiteImage | null = null;

  constructor(private readonly imageService: ImageService) {
    this.images = this.imageService.getGalleryImages();
  }

  openImage(image: SiteImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
