import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';

const routes: Routes = [
  { path: "apertureofyou", component: Home },
  { path: "contact", component: Contact },
  { path: "gallery", component: Gallery, data: {headerTheme: 'dark-header'} },
  { path: 'gallery/:country', component: Gallery, data: {headerTheme: 'dark-header'} },
  { path: "portfolio", component: Portfolio },
  { path: "services", component: Services },
  { path: "about", component: About },
  { path: "", redirectTo: "/apertureofyou", pathMatch: "full" },
  { path: "**", redirectTo: "/apertureofyou", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
