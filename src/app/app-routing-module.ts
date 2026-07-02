import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';

const routes: Routes = [
  { path: "", component: Home, title: 'Aperture of You' },
  { path: "contact", component: Contact, title: 'Contact | Aperture of You'},
  { path: "gallery", component: Gallery, data: {headerTheme: 'dark-header'}, title: 'Gallery | Aperture of You' },
  { path: 'gallery/:country', component: Gallery, data: {headerTheme: 'dark-header'}, title: 'Gallery | Aperture of You' },
  { path: "portfolio", component: Portfolio, title: 'Portfolio | Aperture of You' },
  { path: "services", component: Services, data: {headerTheme: 'dark-header'}, title: 'Services | Aperture of You' },
  { path: "about", component: About, title: 'About | Aperture of You' },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
