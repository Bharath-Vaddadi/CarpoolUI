import { Injectable } from '@angular/core';
import { OrderDetails } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  orderBooked:boolean = false;
  displayBookings=false;
  constructor() { }
}
