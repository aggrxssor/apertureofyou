import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  currentLang: string = (typeof window !== 'undefined' && window.location.pathname.startsWith('/hu')) ? 'hu' : 'en';

  switchLanguage(lang: string) {
    if (typeof window !== 'undefined') {sessionStorage.setItem('scrollPos', window.scrollY.toString());

      const currentPath = window.location.pathname.replace(/^\/(en|hu)/, '');
      window.location.href = `/${lang}${currentPath}`;
    }
  }
}
