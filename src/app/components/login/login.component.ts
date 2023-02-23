import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/models/login';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private route:Router,private service:ApiService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
    })
  }

  submit(){
    if(this.loginForm.valid){
      var loginDetails = new LoginDetails(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      this.service.login(loginDetails).subscribe(data=>{
        var res = data.toString();
        if(res == "User Do not exists"){
          alert("Either email or password is wrong, if not registered please signup");
        }
        else{
          localStorage.setItem("token",res.substring(0,res.length-1));
          localStorage.setItem("userId",res.charAt(res.length-1));
          this.route.navigate(["/welcome"]);
        }
      });
    }
  }

}
