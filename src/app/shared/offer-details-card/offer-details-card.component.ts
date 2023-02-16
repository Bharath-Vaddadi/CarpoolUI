import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-details-card',
  templateUrl: './offer-details-card.component.html',
  styleUrls: ['./offer-details-card.component.scss']
})
export class OfferDetailsCardComponent implements OnInit {

  isClicked=false;
  selectedSeat=0;

  constructor() { }

  ngOnInit(): void {
  }


}
