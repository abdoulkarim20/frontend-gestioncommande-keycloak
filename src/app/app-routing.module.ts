import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/security.guard';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {
    path: 'commandes', component: PanierComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] }
  },
  {
    path: 'forbidden', component: ForbiddenComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
