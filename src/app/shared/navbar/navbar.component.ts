import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  users:any;
  currentUser= localStorage.getItem("userId");
  currentUserIdx:number = (this.currentUser==null)?0:parseInt(this.currentUser)-1;


  username!:string;
  // image!:SafeUrl;

  constructor(private service:ApiService,private sanitizer:DomSanitizer) {
      this.service.getUserDetails().subscribe(data=>{
      this.users=data;
      this.username = this.users[this.currentUserIdx].name;
    });

  }

  ngOnInit(): void {

  }

  logout(){
    localStorage.clear();
  }
}
