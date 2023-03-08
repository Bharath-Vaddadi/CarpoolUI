export class UserDetails
{
  public DisplayName: string;
  public Email:string;
  public Password:string;
  public ImageSrc:string;
  public FirstName:string;
  public LastName:string;
  public Dob:string;
  public Mobile:string;
  public Gender:string;


  constructor(displayName:string,email:string,password:string,imageSrc:string,fname:string,lname:string,dob:string,mobile:string,gender:string){
    this.DisplayName=displayName;
    this.Email=email;
    this.Password=password;
    this.ImageSrc=imageSrc;
    this.FirstName=fname;
    this.LastName=lname;
    this.Dob=dob;
    this.Mobile=mobile;
    this.Gender=gender;
  }
}
