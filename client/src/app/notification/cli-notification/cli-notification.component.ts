import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { AuthNotificationService, clientID } from 'src/app/notification/auth-notification.service';
import { requestDetails, bidResponseDetails, requestDeveloperDetails } from 'src/app/home/auth-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-notification',
  templateUrl: './cli-notification.component.html',
  styleUrls: ['./cli-notification.component.css']
})
export class CliNotificationComponent implements OnInit {

  constructor(private auth: AuthenticationService, private route: Router, private authNot: AuthNotificationService) { }


  client_data:clientID={
    client_ID: 0
  }

  requestNotificationNew:requestDetails
  bidNotificationNew: bidResponseDetails
  developerAcceptNew: requestDeveloperDetails
  requestNotificationOld:requestDetails
  bidNotificationOld: bidResponseDetails
  developerAcceptOld: requestDeveloperDetails



  marked1:boolean = false
  marked2:boolean = false

  
  ngOnInit() {

    this.client_data.client_ID=this.auth.getUserDetails().id

    this.authNot.newAllRequest(this.client_data).subscribe(
      request=>{
        if(request!=''){
          this.requestNotificationNew = request
          this.marked1=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.newAllBid(this.client_data).subscribe(
      request=>{
        if(request!=''){
          this.bidNotificationNew = request
          this.marked1=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.newAllAcception(this.client_data).subscribe(
      request=>{
        if(request!=''){
          this.developerAcceptNew = request
          this.marked1=true
        }
      },
      err=>{
        console.log(err)
      }
    )


    this.authNot.oldAllRequest(this.client_data).subscribe(
      request=>{
        if(request!=''){
          this.requestNotificationOld = request
          this.marked2=true
        }
      },
      err=>{
        console.log(err)
      }
    )


    this.authNot.oldAllBid(this.client_data).subscribe(
      request=>{
        if(request!=''){
          this.bidNotificationOld = request
          this.marked2=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.oldAllAcception(this.client_data).subscribe(
      request=>{
        if(request!=''){
          this.developerAcceptOld = request
          this.marked2=true
        }
      },
      err=>{
        console.log(err)
      }
    )


  }


  viewProjectRequest(not_ID:number){
    this.route.navigate(['/cli_home/notification/projectRequest'],{queryParams:{not_id:not_ID}})
  }

  viewBidResponse(not_ID:number){
    this.route.navigate(['/cli_home/notification/bidRequest'], { queryParams: { not_id:not_ID  } })
  }

  viewDevAccept(not_ID:number){
    this.route.navigate(['/cli_home/notification/devAccept'], { queryParams: { not_id:not_ID  } })
  }

  logout(){
    this.auth.logout()
    }


}
