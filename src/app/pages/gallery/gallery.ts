import { Component, OnInit } from '@angular/core';
import { ImageService, SiteImage } from '../../services/image.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
  readonly images: SiteImage[];
  selectedImage: SiteImage | null = null;
  allImages: SiteImage[] = [];
  filteredImages: SiteImage[] = [];
  activeCountry: string | null = null;
  
  countries: string[] = ['Czechia', 'Hungary', 'Morocco', 'Slovakia', 'Spain'];

  constructor(
      private readonly imageService: ImageService, 
      private route: ActivatedRoute,
      private router: Router 
  ) {
    this.images = this.imageService.getGalleryImages();
  }

  ngOnInit() {
    this.allImages = this.imageService.getGalleryImages();

    this.route.params.subscribe(params => {
      let urlCountry = params['country'] || null;
      
      if (urlCountry) {
        const matched = this.countries.find(c => c.toLowerCase() === urlCountry.toLowerCase());
        this.activeCountry = matched ? matched : urlCountry;
      } else {
        this.activeCountry = null;
      }

      this.filterImages();
    });
  }

  filterImages() {
    if (this.activeCountry) {
      this.filteredImages = this.allImages.filter(
        img => img.location?.toLowerCase() === this.activeCountry?.toLowerCase()
      );
    } else {
      this.filteredImages = [...this.allImages];
    }
  }

  selectCountry(country: string) {
    this.router.navigate(['/gallery', country.toLowerCase()]);
  }

  clearSelection() {
    this.router.navigate(['/gallery']);
  }

  openImage(image: SiteImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}