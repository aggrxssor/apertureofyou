import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar {
    isHidden = false;
    isAbsolute = true;
    isGlass = false;
    lastScrollTop = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScrollTop = Math.max(0, window.pageYOffset || document.documentElement.scrollTop);
        const isScrollingDown = currentScrollTop > this.lastScrollTop;

        if (isScrollingDown) {
        if (currentScrollTop > 200) {
            this.isHidden = true; 
        }
        if (currentScrollTop > 300) {
            this.isAbsolute = false; 
        }
        
        } else {
        if (currentScrollTop <= 0) {
            this.isAbsolute = true;
            this.isHidden = false;
            this.isGlass = false;
            
        } else if (this.isAbsolute) {
            this.isHidden = false;
            this.isGlass = false;
            
        } else {
            this.isHidden = false;
            this.isGlass = true;
        }
        }

        this.lastScrollTop = currentScrollTop;
    }
}