import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from './app.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', redirectTo:'home',pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
];
