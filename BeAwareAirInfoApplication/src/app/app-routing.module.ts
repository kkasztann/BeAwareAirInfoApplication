import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserComponent } from './components/user/user.component';
import { DataComponent } from './components/data/data.component';

import { AuthGuard } from './guards/auth.guard';
import { PollutionMapComponent } from './components/pollution-map/pollution-map.component';
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'pollution-map', component: PollutionMapComponent},
  {path: 'data', component: DataComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'support', component: SupportComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
