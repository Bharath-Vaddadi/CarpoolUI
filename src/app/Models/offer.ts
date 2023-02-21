export class OfferDetails
{
  public From!:string ;
  public To!:string ;
  public Date!:string ;
  public Time!:string ;
  public Stops!:string ;
  public Seats!:number ;
  public Fare!:number ;
  public UserId!:number ;
  public Accomodation!:string ;

  constructor(from:string,to:string,date:string,time:string,stops:string,seats:number,fare:number,userId:number)
  {
    this.From=from;
    this.To=to;
    this.Date=date;
    this.Time=time;
    this.Stops=stops;
    this.Seats=seats;
    this.Fare=fare;
    this.UserId=userId;
    this.Accomodation="";
  }
}
