import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
    isHidden = false;
    isAbsolute = true;
    isGlass = false;
    lastScrollTop = 0;

    isMobileMenuOpen = false;
    isGalleryExpanded = false;

    currentHeaderClass: string | null = null;
    currentLang: string = (typeof window !== 'undefined' && window.location.pathname.startsWith('/hu')) ? 'hu' : 'en';  
    
    private touchStartX = 0;
    private touchStartY = 0;
    private touchEndX = 0;
    private touchEndY = 0;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    switchLanguage(lang: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('scrollPos', window.scrollY.toString());
            const currentPath = window.location.pathname.replace(/^\/(en|hu)/, '');
            window.location.href = `/${lang}${currentPath}`;
        }
    }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let route = this.activatedRoute.firstChild;
                while (route?.firstChild) {
                route = route.firstChild;
                }
                return route?.snapshot.data;
            })
            ).subscribe((data: any) => {
            this.currentHeaderClass = data?.['headerTheme'] || null;
            });
    }

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

    @HostListener('window:touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
        this.touchStartX = event.changedTouches[0].screenX;
        this.touchStartY = event.changedTouches[0].screenY;
    }

    @HostListener('window:touchend', ['$event'])
    onTouchEnd(event: TouchEvent) {
        this.touchEndX = event.changedTouches[0].screenX;
        this.touchEndY = event.changedTouches[0].screenY;
        this.handleSwipe();
    }

    private handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
            if (deltaX < 0 && !this.isMobileMenuOpen) {
                this.toggleMobileMenu();
            } else if (deltaX > 0 && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        
        if (this.isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
        this.isGalleryExpanded = false;
        document.body.style.overflow = '';
    }

    toggleGallery() {
        this.isGalleryExpanded = !this.isGalleryExpanded;
    }
}