import { Component, OnInit } from '@angular/core';
import { ImageService, SiteImage } from '../../services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  readonly images: SiteImage[];
  selectedImage: SiteImage | null = null;
  allImages: SiteImage[] = [];
  filteredImages: SiteImage[] = [];
  activeCountry: string | null = null;

  constructor(private readonly imageService: ImageService, private route: ActivatedRoute) {
    this.images = this.imageService.getGalleryImages();
    
  }

  ngOnInit() {
    this.allImages = this.imageService.getGalleryImages();

    // Listens to the URL continuously
    this.route.params.subscribe(params => {
      this.activeCountry = params['country'] || null;

      if (this.activeCountry) {
        // Filter by location if country exists in URL
        this.filteredImages = this.allImages.filter(
          img => img.location?.toLowerCase() === this.activeCountry?.toLowerCase()
        );
      } else {
        // Show everything if path is just /gallery
        this.filteredImages = [...this.allImages];
      }
    });
  }

  openImage(image: SiteImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
