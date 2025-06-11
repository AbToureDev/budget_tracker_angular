import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CreateAccountComponent} from './pages/create-account/create-account.component';
import {BudgetDetailsComponent} from './pages/budget-details/budget-details.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {authGuard} from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuard]

  },
  {
    path:"create_account",
    component: CreateAccountComponent,
  },
  {
    path:"details/:id",
    component: BudgetDetailsComponent,
    canActivate:[authGuard]
  },
  {
    path:"**",
    component:NotFoundComponent
  }

];
