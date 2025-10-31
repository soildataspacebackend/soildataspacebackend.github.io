import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  //Redirección a home si se pone una ruta que no existe
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled', // 👈 Esto activa el scroll con fragment la manita del chati eh
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
