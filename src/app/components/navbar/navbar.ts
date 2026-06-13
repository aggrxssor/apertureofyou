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

    currentHeaderClass: string | null = null;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
            console.log('Current Header Theme:', this.currentHeaderClass);
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
}