import { Component, OnInit } from '@angular/core';
import { Times } from '../../times-enum';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.scss']
})
export class OfferRideComponent implements OnInit {
  Times=Times;
  selectedTime:string=""
  circleCount:number=7;
  stopsCount:number=3;
  displayRemainingForm:boolean=false;
  selectedSeat:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addStop(){
    this.stopsCount+=1;
    (this.stopsCount%2==0)?this.circleCount+=4:this.circleCount+=5;
  }

}
