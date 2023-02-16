import { Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserDetails } from 'src/app/Models/user-details.model';

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

  constructor(private route:Router,private sanitizer:DomSanitizer) { }

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

    this.userProfileForm = new FormGroup({
      'name':new FormControl(null,Validators.required),
      'image':new FormControl(null,Validators.required)
    })

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

  createUrl(e:any){
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(e.target.files[0]));
    this.userProfileForm.value.image = this.src;
  }

  onSignedIn(){
    if(this.signupForm.valid && this.signupForm.get('password')?.value == this.signupForm.get('confirmPassword')?.value){
      this.extendForm = true;
    }
  }

  onProfileSubmit(){
    if(this.userProfileForm.valid){
      this.route.navigate(["/welcome"]);
      var userDetails = new UserDetails(
        this.userProfileForm.value.name,
        this.signupForm.value.emailId,
        this.signupForm.value.password,
        this.userProfileForm.value.image
      )
      console.log(userDetails);
    }
  }

}
