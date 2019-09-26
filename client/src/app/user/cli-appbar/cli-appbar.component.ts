import { Component, OnInit } from '@angular/core';
import { AuthenticationService, clientID } from '../authentication.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-cli-appbar',
  templateUrl: './cli-appbar.component.html',
  styleUrls: ['./cli-appbar.component.css'],
  
})
export class CliAppbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

client_data:clientID={
  client_ID: 0
}

countRequest:number=null
countBid:number=null
countAccept:number = null

  ngOnInit() {

    this.client_data.client_ID=this.auth.getUserDetails().id
      
    this.auth.countRequest(this.client_data).subscribe(
      request=>{
        this.countRequest = request
      },
      err=>{
        console.log(err)
      }
    )


    this.auth.countBid(this.client_data).subscribe(
      request=>{
        this.countBid = request
      },
      err=>{
        console.log(err)
      }
    )

    this.auth.countAccept(this.client_data).subscribe(
      request=>{
        this.countAccept = request
      },
      err=>{
        console.log(err)
      }
    )



  }


  logout(){
    this.auth.logout()
    }
    
}
