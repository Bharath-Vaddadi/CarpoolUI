import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BookRideComponent } from './components/book-ride/book-ride.component';
import { OfferDetailsCardComponent } from './shared/offer-details-card/offer-details-card.component';
import { OfferRideComponent } from './components/offer-ride/offer-ride.component';
import { MyRidesComponent } from './components/my-rides/my-rides.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
    NavbarComponent,
    BookRideComponent,
    OfferDetailsCardComponent,
    OfferRideComponent,
    MyRidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
