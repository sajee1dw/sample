import { Component, OnInit } from '@angular/core';
import { AuthenticationService,developerID } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-appbar',
  templateUrl: './dev-appbar.component.html',
  styleUrls: ['./dev-appbar.component.css']
})
export class DevAppbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router:Router) { }

  developer_data:developerID={
    developer_ID: 0
  }
  
  countRequestDeveloper:number=null
  countAccBidReq:number=null
  countAccProReq:number=null

  ngOnInit() {

    this.developer_data.developer_ID=this.auth.getUserDetails().id
      
    this.auth.countRequestDeveloper(this.developer_data).subscribe(
      result=>{
        this.countRequestDeveloper = result
      },
      err=>{
        console.log(err)
      }
    )

    this.auth.countAcceptBidReq(this.developer_data).subscribe(
      result=>{
        this.countAccBidReq = result
      },
      err=>{
        console.log(err)
      }
    )


    this.auth.countAcceptProReq(this.developer_data).subscribe(
      result=>{
        this.countAccProReq = result
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
