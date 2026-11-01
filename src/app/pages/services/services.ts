import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit {
  private readonly sectionIds = [
    'services-introduction',
    'blue-hour-session',
    'blue-hour-panorama-session',
    'couples-connection',
    'custom-sessions',
    'specialty-commissions',
    'digital-architecture',
  ];

  activeSection = this.sectionIds[0];
  isNavigatorVisible = false;

  ngAfterViewInit(): void {
    this.updateNavigatorState();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateNavigatorState(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isNavigatorVisible = window.innerWidth >= 1300 && window.scrollY > 300;

    const activationLine = window.innerHeight * 0.35;
    let activeSection = this.sectionIds[0];

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);
      if (section && section.getBoundingClientRect().top <= activationLine) {
        activeSection = sectionId;
      }
    }

    this.activeSection = activeSection;
  }

  navigateToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'center',
    });
  }
}
