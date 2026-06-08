import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Carousel } from './components/carousel/carousel';
import { Footer } from './components/footer/footer';
import { ImageModal } from './components/image-modal/image-modal';
import { Navbar } from './components/navbar/navbar';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Error404 } from './pages/error404/error404';
import { Gallery } from './pages/gallery/gallery';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';

@NgModule({
  declarations: [
    App,
    Carousel,
    Footer,
    ImageModal,
    Navbar,
    About,
    Contact,
    Error404,
    Gallery,
    Home,
    Portfolio,
    Services
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
