import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
