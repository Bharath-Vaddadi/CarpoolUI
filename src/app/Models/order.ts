export class OrderDetails
{
  public From!:string;
  public To!:string;
  public Date !:string;
  public Time !:string;
  public Seats!:number;
  public OfferId! :number;
  public UserId !:number;

  constructor(from:string,to:string,date:string,time:string,seats:number,offerId:number,userId:number)
  {
    this.From = from;
    this.To = to;
    this.Date = date;
    this.Time = time;
    this.Seats = seats;
    this.OfferId = offerId;
    this.UserId = userId;
  }
}
