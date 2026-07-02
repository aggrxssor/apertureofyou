import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  currentLang: string = 'en';

  switchLanguage(lang: string) {
    this.currentLang = lang;
    console.log(`Language switched to: ${lang}`);
    
  }
}
