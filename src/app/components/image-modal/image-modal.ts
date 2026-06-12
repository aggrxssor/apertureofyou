import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SiteImage } from '../../services/image.service';

@Component({
  selector: 'app-image-modal',
  standalone: false,
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.css',
})
export class ImageModal {
  @Input() image: SiteImage | null = null;
  @Output() closeModal = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.image) {
      this.close();
    }
  }

  close(): void {
    this.closeModal.emit();
  }
}
