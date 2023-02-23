import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.scss']
})
export class MyRidesComponent implements OnInit {

  profileOrders:any;
  profileOffers:any;
  bookings:any;
  user = localStorage.getItem('userId');
  userId:number = (this.user==null)?0:parseInt(this.user);

  show:boolean=false;

  constructor(private service:ApiService,public helper:HelperService) {
    this.service.getProfileOrders(this.userId).subscribe(data=>{
      this.profileOrders=data;
      console.log(data);
    })
    this.service.getProfileOffers(this.userId).subscribe(data=>{
      this.profileOffers=data;
      console.log(data);
    })

  }

  ngOnInit(): void {
  }

  displayBookings(offerId:number,fare:number){
    this.show=true;
    console.log(offerId,fare);

    this.service.getProfileOffersBookings(offerId,fare).subscribe(data=>{
      this.bookings=data;
      console.log(data);
    })
  }
}
