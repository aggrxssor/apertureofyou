import { Component, signal, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('apertureofyou');

  showScrollTop = false;

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const savedScroll = sessionStorage.getItem('scrollPos');
      
      if (savedScroll) {
        setTimeout(() => {
          window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
          sessionStorage.removeItem('scrollPos'); 
        }, 50);
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 300) {
      this.showScrollTop = true;
    } else {
      this.showScrollTop = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}