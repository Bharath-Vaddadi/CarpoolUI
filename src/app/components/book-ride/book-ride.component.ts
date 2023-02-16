import { Component, OnInit } from '@angular/core';
import { Times } from '../../times-enum';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.scss']
})

export class BookRideComponent implements OnInit {
  selectedTime:String="";
  Times = Times;
  showMatches:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}


