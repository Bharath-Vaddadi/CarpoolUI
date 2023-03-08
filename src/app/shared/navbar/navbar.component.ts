import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:any;
  currentUser= localStorage.getItem("userId");
  currentUserIdx:number = (this.currentUser==null)?0:parseInt(this.currentUser);


  username!:string;
  image!:string;

  constructor(private service:ApiService,private route:Router) {
      this.service.getUser(this.currentUserIdx).subscribe(data=>{
      this.user=data;
      this.username = this.user.displayName;
      this.image=this.user.imageSrc;
      if(this.image==""){
        this.image = "../../../assets/images/user-profile-icon-free-vector.jpg"
      }
    });

  }

  ngOnInit(): void {


  }

  logout(){
    localStorage.clear();
  }

  navigateHome(){
    this.route.navigate(['/welcome']);
  }
}
