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
  isClosing = false;
  private lockInterval: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['image'] && this.image) {
      this.isClosing = false;
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