import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  user:any;
  currentUser= localStorage.getItem("userId");
  currentUserIdx:number = (this.currentUser==null)?0:parseInt(this.currentUser);


  username!:string;

  constructor(private service:ApiService) {
    this.service.getUser(this.currentUserIdx).subscribe(data=>{
      this.user=data;
      console.log(this.user);
      this.username = this.user.displayName;
    });
   }

  ngOnInit(): void {
  }

}
