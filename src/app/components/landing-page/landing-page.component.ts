import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  users:any;
  currentUser= localStorage.getItem("userId");
  currentUserIdx:number = (this.currentUser==null)?0:parseInt(this.currentUser)-1;


  username!:string;

  constructor(private service:ApiService) {
    this.service.getUserDetails().subscribe(data=>{
      this.users=data;
      console.log(this.users);
      this.username = this.users[this.currentUserIdx].name;
    });
   }

  ngOnInit(): void {
  }

}
