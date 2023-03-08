import { Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserDetails } from 'src/app/models/user-details.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  inputType:string = "password";
  icon:string = "bi bi-eye-fill";
  extendForm:boolean = false;
  src:SafeUrl="";

  signupForm!: FormGroup;
  userProfileForm!:FormGroup;

  constructor(private route:Router,private sanitizer:DomSanitizer,private service:ApiService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'emailId': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,
        [
         Validators.required,
         Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!,$]).{8,32}$')
      ]),
      'confirmPassword': new FormControl(null,[ Validators.required])
    });

  }

  showText(){
    if(this.inputType == "password"){
      this.inputType = "text";
      this.icon = "bi bi-eye-slash-fill"
    }
    else{
      this.inputType = "password";
      this.icon = "bi bi-eye-fill";
    }
  }

  onSignedIn(){
    if(this.signupForm.valid && this.signupForm.get('password')?.value == this.signupForm.get('confirmPassword')?.value){

      this.service.verifyUser(this.signupForm.get('emailId')?.value).subscribe(data=>{
        if(data){
          alert("User Already Exists");
        }
        else{
          var userDetails=new UserDetails(

            this.signupForm.value.emailId.split('@')[0],
            this.signupForm.value.emailId,
            this.signupForm.value.password,"../../../assets/images/user-profile-icon-free-vector.jpg","","","","",""
          )
          console.log(userDetails);

          this.service.signupUser(userDetails).subscribe(data=>{
            console.log(data);
            alert("user registered successfully");
            this.route.navigate(["/login"]);
          });
        }
      });
    }
  }

}
