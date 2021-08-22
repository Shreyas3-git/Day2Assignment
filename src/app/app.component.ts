import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
   title = "Hello ";
   userName : string = "";
   imgUrl = "../assets/oracle.jpg";
   url = "http://www.oracle.com";
   errorOutput = "";

  // OnInit() : void 
  // {
  //    this.title = 'BridgeLabz:' ;
  //    this.imgUrl = "../assets/BridgeLabz.jpg";
  //    this.url = "http://www.bridgelabz.com";
  //    this.userName = "Shreyas";
  // }

  onClick($event : object) 
  {
      console.log("click on image to open the link here",$event);
      window.open(this.url,"_self");
  }

  onInput($event : object)
  {
      console.log("here changes will be reflected to the respected name section:",$event);
      const nameRegex  = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (nameRegex.test(this.userName)) 
      {
          this.errorOutput = "";          
          return;
      }
      this.errorOutput = "Incorrect username:";
  }
}

