import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  // Default state for your UI
  currentLang: string = 'en';

  switchLanguage(lang: string) {
    this.currentLang = lang;
    console.log(`Language switched to: ${lang}`);
    
    // Future integration goes here! Example:
    // this.translateService.use(lang);
  }
}
