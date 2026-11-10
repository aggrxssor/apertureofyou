import { Component, EventEmitter, HostListener, Input, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { SiteImage } from '../../services/image.service';

@Component({
  selector: 'app-image-modal',
  standalone: false,
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.css',
})
export class ImageModal implements OnChanges, OnDestroy {
  @Input() image: SiteImage | null = null;
  @Input() aspectRatio: number | null = null;
  @Output() closeModal = new EventEmitter<void>();

  private pushedState = false;
  private scrollPosition = 0;
  private viewportWidth = typeof window === 'undefined' ? 0 : window.innerWidth;
  private viewportHeight = typeof window === 'undefined' ? 0 : window.innerHeight;
  isClosing = false;
  isImageLoaded = false;
  private lockInterval: any;

  get imageDisplaySize(): { width: number; height: number } | null {
    if (!this.aspectRatio || !this.viewportWidth || !this.viewportHeight) {
      return null;
    }

    const gutter = this.viewportWidth <= 767 ? 16 : 32;
    const frameSpace = this.image?.title ? 56 : 24;
    const maxWidth = Math.max(0, this.viewportWidth - 2 * gutter - frameSpace);
    const maxHeight = Math.max(0, this.viewportHeight - 2 * gutter - frameSpace);
    const width = Math.min(maxWidth, maxHeight * this.aspectRatio);

    return { width, height: width / this.aspectRatio };
  }

  @HostListener('window:resize')
  onViewportResize(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['image']) {
      this.isImageLoaded = false;
    }

    if (changes['image'] && this.image) {
      this.isClosing = false;
      if (typeof window !== 'undefined' && !this.pushedState) {
        this.scrollPosition = window.scrollY;
        
        window.history.pushState(window.history.state, '', window.location.href);
        this.pushedState = true;
      }
    }
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
  }

  @HostListener('window:popstate')
  onPopState(): void {
    if (this.pushedState) {
      this.pushedState = false;
      this.lockScrollTemporarily();
      this.cleanUpAndClose();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.image && !this.isClosing) {
      this.close();
    }
  }

  close(): void {
    if (this.isClosing) return;

    if (this.pushedState && typeof window !== 'undefined') {
      this.lockScrollTemporarily();
      window.history.back();
    } else {
      this.cleanUpAndClose();
    }
  }

  ngOnDestroy(): void {
    if (this.pushedState && typeof window !== 'undefined') {
      window.history.back();
    }
    this.releaseScrollLock();
  }

  private lockScrollTemporarily(): void {
    if (typeof window === 'undefined') return;
    const targetPos = this.scrollPosition;
    window.scrollTo({ top: targetPos, behavior: 'instant' });

    if (this.lockInterval) clearInterval(this.lockInterval);
    this.lockInterval = setInterval(() => {
      if (window.scrollY !== targetPos) {
        window.scrollTo({ top: targetPos, behavior: 'instant' });
      }
    }, 5);
  }

  private releaseScrollLock(): void {
    if (this.lockInterval) {
      clearInterval(this.lockInterval);
      this.lockInterval = null;
    }
  }

  private cleanUpAndClose(): void {
    if (typeof document !== 'undefined') {
      (document.activeElement as HTMLElement)?.blur();
    }
    
    this.isClosing = true;
    
    setTimeout(() => {
      this.isClosing = false;
      this.closeModal.emit();
      this.releaseScrollLock();
    }, 250); 
  }
}