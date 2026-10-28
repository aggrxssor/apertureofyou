import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ImageService, SiteImage } from '../../services/image.service';
import { ActivatedRoute, Router } from '@angular/router';

interface GalleryCountry {
  slug: string;
  englishName: string;
  hungarianName: string;
}

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
  readonly countries: GalleryCountry[] = [
    { slug: 'austria', englishName: 'Austria', hungarianName: 'Ausztria' },
    { slug: 'croatia', englishName: 'Croatia', hungarianName: 'Horvátország' },
    { slug: 'czechia', englishName: 'Czechia', hungarianName: 'Csehország' },
    { slug: 'greece', englishName: 'Greece', hungarianName: 'Görögország' },
    { slug: 'hungary', englishName: 'Hungary', hungarianName: 'Magyarország' },
    { slug: 'morocco', englishName: 'Morocco', hungarianName: 'Marokkó' },
    { slug: 'slovakia', englishName: 'Slovakia', hungarianName: 'Szlovákia' },
    { slug: 'spain', englishName: 'Spain', hungarianName: 'Spanyolország' },
  ];
  readonly isHungarian: boolean;

  constructor(
      private readonly imageService: ImageService,
      private route: ActivatedRoute,
      private router: Router,
      @Inject(LOCALE_ID) locale: string
  ) {
    this.images = this.imageService.getGalleryImages();
    this.isHungarian = locale.toLowerCase().startsWith('hu');
  }

  ngOnInit() {
    this.allImages = this.imageService.getGalleryImages();

    this.route.params.subscribe(params => {
      let urlCountry = params['country'] || null;
      
      if (urlCountry) {
        const matched = this.countries.find(c => c.slug === urlCountry.toLowerCase());
        this.activeCountry = matched ? matched.englishName : urlCountry;
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

  getCountryLabel(country: GalleryCountry): string {
    return this.isHungarian ? country.hungarianName : country.englishName;
  }

  get activeCountryLabel(): string | null {
    if (!this.activeCountry) {
      return null;
    }

    const country = this.countries.find(
      item => item.englishName.toLowerCase() === this.activeCountry?.toLowerCase()
    );
    return country ? this.getCountryLabel(country) : this.activeCountry;
  }

  selectCountry(country: GalleryCountry) {
    this.router.navigate(['/gallery', country.slug]);
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