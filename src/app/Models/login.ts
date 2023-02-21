export class LoginDetails
{
  public Email:string;
  public Password:string;

  constructor(username:string,password:string)
  {
    this.Email = username;
    this.Password = password;
  }

}
