import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.component').then((x) => x.HomeComponent),
            },
            {
                path: 'about-us',
                loadComponent: () => import('./about-us/about-us.component').then((x) => x.AboutUsComponent),
            },
            {
                path: 'privacy-policy',
                loadComponent: () => import('./privacy-policy/privacy-policy.component').then((x) => x.PrivacyPolicyComponent),
            },
            {
                path: 'contact-us',
                loadComponent: () => import('./contact-us/contact-us.component').then((x) => x.ContactUsComponent),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];
