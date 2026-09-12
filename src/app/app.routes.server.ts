import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'gallery/:country',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
      
        { country: 'austria' },
        { country: 'croatia' },
        { country: 'czechia' },
        { country: 'hungary' },
        { country: 'morocco' },
        { country: 'slovakia' },
        { country: 'spain' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];