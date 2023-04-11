import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages/secure-inner-pages.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: 'login/verify-otp',
    component: VerifyOtpComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
