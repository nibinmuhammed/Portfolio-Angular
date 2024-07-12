import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:"full" },
    { path: 'home', component: HomeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'contact-me', component: ContactMeComponent },
    { path: '**', redirectTo: '/home', pathMatch:"full" }
];
