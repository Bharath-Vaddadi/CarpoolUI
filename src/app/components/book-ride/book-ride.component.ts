import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderDetails } from 'src/app/models/order';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { Times } from '../../enums/times-enum';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.scss']
})

export class BookRideComponent implements OnInit {
  selectedTime:string="";

  Times = Times;
  showMatches:boolean = false;

  rideBookingForm!:FormGroup;
  currUserId = localStorage.getItem("userId");
  orderMatches:any;
  constructor(private helperService:HelperService,private apiService:ApiService) { }

  ngOnInit(): void {

    this.rideBookingForm = new FormGroup({
      'from' : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]')]),
      'to' : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]')]),
      'date': new FormControl(null,Validators.required),
      'seats':new FormControl(0,Validators.required)
    });
  }

  onSubmit(){
    if(this.rideBookingForm.valid){
      var dateInp = this.rideBookingForm.value.date.split('-');
      var formattedDate = dateInp[2]+'/'+dateInp[1]+'/'+dateInp[0];
      var orderDetails = new OrderDetails(
        this.rideBookingForm.value.from,
        this.rideBookingForm.value.to,
        formattedDate,
        this.selectedTime,
        this.rideBookingForm.value.seats,0
        ,(this.currUserId==null)?0:parseInt(this.currUserId)
      );

      this.apiService.postOrder(orderDetails).subscribe(data=>{
        console.log(data);
        this.apiService.getOrderMatches().subscribe(
          data=>{
            console.log(data);
            this.orderMatches = data;
          }
        );
      });

    }
    console.log(this.orderMatches);
    this.showMatches=true;
  }

}


