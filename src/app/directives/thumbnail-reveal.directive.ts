import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appThumbnailReveal]',
  standalone: false,
})
export class ThumbnailReveal implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private isInViewport = false;
  private hasLoaded = false;

  constructor(private readonly elementRef: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit(): void {
    const image = this.elementRef.nativeElement;
    this.hasLoaded = image.complete && image.naturalWidth > 0;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        this.isInViewport = entry.isIntersecting;
        if (this.isInViewport) {
          this.revealIfReady();
        } else {
          image.classList.remove('thumbnail-visible');
        }
      }
    });
    this.observer.observe(image);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('load')
  onLoad(): void {
    this.hasLoaded = true;
    this.revealIfReady();
  }

  private revealIfReady(): void {
    if (this.hasLoaded && this.isInViewport) {
      this.elementRef.nativeElement.classList.add('thumbnail-visible');
    }
  }
}
