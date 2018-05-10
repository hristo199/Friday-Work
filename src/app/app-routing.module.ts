import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =
[
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: LandingPageComponent },
{ path: 'about', component: AboutComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', component: LandingPageComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }
