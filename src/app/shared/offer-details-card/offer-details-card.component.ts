import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-offer-details-card',
  templateUrl: './offer-details-card.component.html',
  styleUrls: ['./offer-details-card.component.scss']
})
export class OfferDetailsCardComponent implements OnInit {

  isClicked=false;

  @Input() ride:any;
  @Input() choosedSeat:any;

  constructor(private apiService:ApiService,private helperService:HelperService) { }

  ngOnInit(): void {
    console.log(this.ride);
    console.log(this.choosedSeat);

  }

  bookRide(offerId:number){
    this.apiService.bookRide(offerId).subscribe(data=>{
      alert(data);
      location.reload();
    })

  }


}
