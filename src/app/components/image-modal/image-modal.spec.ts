import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModal } from './image-modal';

describe('ImageModal', () => {
  let component: ImageModal;
  let fixture: ComponentFixture<ImageModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reveal the full image after it loads', () => {
    fixture.componentRef.setInput('image', {
      id: 'test',
      title: '',
      alt: 'Test image',
      thumbnailUrl: 'thumbnail.jpg',
      midSizedUrl: 'full.jpg',
      orientation: 'landscape',
    });
    fixture.detectChanges();

    const imageStack: HTMLDivElement = fixture.nativeElement.querySelector('.image-modal-image');
    expect(imageStack.classList.contains('loaded')).toBeFalse();

    const fullImage: HTMLImageElement = fixture.nativeElement.querySelector('.image-modal-full');
    fullImage.dispatchEvent(new Event('load'));
    fixture.detectChanges();

    expect(imageStack.classList.contains('loaded')).toBeTrue();
  });

  it('should reset the loading state when the image changes', () => {
    fixture.componentRef.setInput('image', {
      id: 'first',
      title: '',
      alt: 'First image',
      thumbnailUrl: 'first-thumbnail.jpg',
      midSizedUrl: 'first-full.jpg',
      orientation: 'landscape',
    });
    fixture.detectChanges();
    component.onImageLoad();
    fixture.detectChanges();

    fixture.componentRef.setInput('image', {
      id: 'second',
      title: '',
      alt: 'Second image',
      thumbnailUrl: 'second-thumbnail.jpg',
      midSizedUrl: 'second-full.jpg',
      orientation: 'portrait',
    });
    fixture.detectChanges();

    const imageStack: HTMLDivElement = fixture.nativeElement.querySelector('.image-modal-image');
    expect(imageStack.classList.contains('loaded')).toBeFalse();
  });
});
