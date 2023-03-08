import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDetails } from 'src/app/models/user-details.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user:any;
  currUser = localStorage.getItem('userId');
  currUserId = this.currUser==null?0:parseInt(this.currUser);

  profileForm!:FormGroup;
  image:any="";

  constructor(private service:ApiService) {
    this.service.getUser(this.currUserId).subscribe(data=>{
      this.user = data;
      console.log(this.user);

    });
   }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName:new FormControl(""),
      lastName: new FormControl(""),
      dob:new FormControl(""),
      gender:new FormControl(""),
      mobile:new FormControl(""),
      displayName:new FormControl(""),
    })
  }

  createUrl(e:any){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e)=>{
      this.image=reader.result;
    }
  }

  updateUserProfile(){
    var dateInp = this.profileForm.value.dob;
    var date;
    if(dateInp!=""){
      var sp = dateInp.split("-");
      date = sp[2]+"/"+sp[1]+"/"+sp[0];
    }

    var displayName = (this.profileForm.value.displayName=="")?this.user.displayName:this.profileForm.value.displayName;
    var firstName = (this.profileForm.value.firstName=="")?this.user.firstName:this.profileForm.value.firstName;
    var lastName = (this.profileForm.value.lastName=="")?this.user.lastName:this.profileForm.value.lastName;
    var dob = (this.profileForm.value.dob=="")?this.user.dob:date;
    var gender = (this.profileForm.value.gender=="")?this.user.gender:this.profileForm.value.gender;
    var mobile = (this.profileForm.value.mobile=="")?this.user.mobile:this.profileForm.value.mobile;

    var newUser = new UserDetails(
      displayName,this.user.email,"",this.image,firstName,lastName,dob,mobile,gender
    )

    console.log(newUser);


    this.service.updateUser(newUser,this.currUserId).subscribe(data=>{
      alert(data);
      location.reload();
    })
  }

}
