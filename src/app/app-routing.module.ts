import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { BookRideComponent } from './components/book-ride/book-ride.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyRidesComponent } from './components/my-rides/my-rides.component';
import { OfferRideComponent } from './components/offer-ride/offer-ride.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"",component:AuthPageComponent,children:[{path:"",redirectTo:"/signup",pathMatch:"full"},{path:"signup",component:SignupComponent},{path:"login",component:LoginComponent}]},
  {path:"welcome",component:LandingPageComponent,canActivate:[AuthGuard]},
  {path:"book-ride",component:BookRideComponent,canActivate:[AuthGuard]},
  {path:"offer-ride",component:OfferRideComponent,canActivate:[AuthGuard]},
  {path:"my-profile",component:MyProfileComponent,canActivate:[AuthGuard]},
  {path:"my-rides",component:MyRidesComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
