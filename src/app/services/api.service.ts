import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from '../models/login';
import { OfferDetails } from '../models/offer';
import { OrderDetails } from '../models/order';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "https://localhost:7262/CarpoolApi";

  getUserDetails(){
    return this.http.get(this.apiUrl+"/Signup");
  }

  verifyUser(username:string){
    return this.http.get(this.apiUrl+"/Signup/"+username);
  }

  signupUser(userDetails:UserDetails){
    return this.http.post(this.apiUrl+"/Signup",userDetails);
  }

  login(loginDetails:LoginDetails){
     return this.http.post(this.apiUrl+"/Login",loginDetails);
  }

  postOrder(orderDetails:OrderDetails){
    return this.http.post(this.apiUrl+"/Orders",orderDetails);
  }

  getOrderMatches(){
    return this.http.get(this.apiUrl+"/Orders/selectRides");
  }

  bookRide(offerId:number){
    return this.http.post(this.apiUrl+"/Orders/selectRides/"+offerId.toString(),null);
  }

  postOffer(offerDetails:OfferDetails){
    return this.http.post(this.apiUrl+"/Offers",offerDetails);
  }
}
