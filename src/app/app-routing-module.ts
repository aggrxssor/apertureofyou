import { inject, LOCALE_ID, NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { GALLERY_COUNTRIES, Gallery } from './pages/gallery/gallery';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';

const localizedPageTitle =
  (english: string, hungarian: string): ResolveFn<string> =>
    () => inject(LOCALE_ID).toLowerCase().startsWith('hu') ? hungarian : english;

const galleryTitle: ResolveFn<string> = route => {
  const isHungarian = inject(LOCALE_ID).toLowerCase().startsWith('hu');
  const countrySlug = route.paramMap.get('country');

  if (!countrySlug) {
    return isHungarian ? 'Galéria | Aperture of You' : 'Gallery | Aperture of You';
  }

  const country = GALLERY_COUNTRIES.find(item => item.slug === countrySlug.toLowerCase());
  const countryName = country
    ? isHungarian
      ? country.hungarianName
      : country.englishName
    : countrySlug;

  return `${isHungarian ? 'Galéria' : 'Gallery'} | ${countryName}`;
};

const routes: Routes = [
  {
    path: '',
    component: Home,
    title: localizedPageTitle('Aperture of You', 'Aperture of You'),
  },
  {
    path: 'contact',
    component: Contact,
    title: localizedPageTitle('Contact | Aperture of You', 'Kapcsolat | Aperture of You'),
  },
  {
    path: 'gallery',
    component: Gallery,
    data: { headerTheme: 'dark-header' },
    title: galleryTitle,
  },
  {
    path: 'gallery/:country',
    component: Gallery,
    data: { headerTheme: 'dark-header' },
    title: galleryTitle,
  },
  {
    path: 'portfolio',
    component: Portfolio,
    title: localizedPageTitle('Portfolio | Aperture of You', 'Portfólió | Aperture of You'),
  },
  {
    path: 'services',
    component: Services,
    title: localizedPageTitle('Services | Aperture of You', 'Szolgáltatások | Aperture of You'),
  },
  {
    path: 'about',
    component: About,
    data: { headerTheme: 'dark-header' },
    title: localizedPageTitle('About | Aperture of You', 'Rólam | Aperture of You'),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
