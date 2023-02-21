import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OfferDetails } from 'src/app/models/offer';
import { ApiService } from 'src/app/services/api.service';
import { Times } from '../../enums/times-enum';

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

  offerRideForm!:FormGroup;
  currUserId = localStorage.getItem("userId");

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.offerRideForm=new FormGroup({
      'from':new FormControl(null,Validators.required),
      'to': new FormControl(null,Validators.required),
      'date': new FormControl(null,Validators.required),
      'stop1':new FormControl(""),
      'stop2':new FormControl(""),
      'stop3':new FormControl(""),
      'fare': new FormControl(0,Validators.required)
    })
  }

  addStop(){
    this.stopsCount+=1;
    (this.stopsCount%2==0)?this.circleCount+=4:this.circleCount+=5;
    this.offerRideForm.addControl('stop'+this.stopsCount,new FormControl("",Validators.required));
  }

  onOffered(){
    if(this.offerRideForm.valid){

      var stops="";
      for(let i=0;i<this.stopsCount;i++){
        stops = stops+this.offerRideForm.value['stop'+(i+1)];
        if(i!=this.stopsCount-1&& this.offerRideForm.value['stop'+(i+2)]!="" ){
          stops=stops+",";
        }
      }

      var offerDetails = new OfferDetails(
        this.offerRideForm.value.from,
        this.offerRideForm.value.to,
        this.offerRideForm.value.date,
        this.selectedTime,
        stops,this.selectedSeat,
        this.offerRideForm.value.fare,
        (this.currUserId==null)?0:parseInt(this.currUserId)
      );

      this.apiService.postOffer(offerDetails).subscribe(data=>{
        alert(data);
        location.reload();
      });
    }
  }

}
