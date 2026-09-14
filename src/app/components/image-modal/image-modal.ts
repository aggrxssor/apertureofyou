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
  @Output() closeModal = new EventEmitter<void>();

  private pushedState = false;
  private scrollPosition = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['image'] && this.image) {
      if (typeof window !== 'undefined' && !this.pushedState) {
        this.scrollPosition = window.scrollY;
        
        window.history.pushState(window.history.state, '', window.location.href);
        this.pushedState = true;
      }
    }
  }

  @HostListener('window:popstate')
  onPopState(): void {
    if (this.pushedState) {
      this.pushedState = false;
      this.closeModal.emit();
      this.restoreScroll();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.image) {
      this.close();
    }
  }

  close(): void {
    if (this.pushedState) {
      this.pushedState = false;
      if (typeof window !== 'undefined') {
        window.history.back();
        this.restoreScroll();
      }
    }
    this.closeModal.emit();
  }

  ngOnDestroy(): void {
    if (this.pushedState && typeof window !== 'undefined') {
      window.history.back();
    }
  }

  private restoreScroll(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo(0, this.scrollPosition);
      }, 10);
    }
  }
}