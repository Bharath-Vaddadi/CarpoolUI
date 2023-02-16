export class UserDetails
{
  public Name: string;
  public Email:string;
  public Password:string;
  public ImageSrc:string;

  constructor(name:string,email:string,password:string,imageSrc:string){
    this.Name=name;
    this.Email=email;
    this.Password=password;
    this.ImageSrc=imageSrc;
  }
}
