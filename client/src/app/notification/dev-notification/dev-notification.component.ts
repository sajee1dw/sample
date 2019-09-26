import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../user/authentication.service';
import { AuthNotificationService, developerID } from 'src/app/notification/auth-notification.service';
import { requestDeveloperDetails } from 'src/app/home/auth-home.service';


@Component({
  selector: 'app-dev-notification',
  templateUrl: './dev-notification.component.html',
  styleUrls: ['./dev-notification.component.css']
})
export class DevNotificationComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, private authNot: AuthNotificationService) { }

  developer_data:developerID={
    developer_ID: 0
  }

  requestNotificationNew:requestDeveloperDetails
  requestNotificationOld:requestDeveloperDetails
  accProReqNew
  accProReqOld
  accBidReqNew
  accBidReqOld

  marked1:boolean = false
  marked2:boolean = false

  ngOnInit() {

    this.developer_data.developer_ID=this.auth.getUserDetails().id

    this.authNot.newAllRequestDeveloper(this.developer_data).subscribe(
      request=>{
        if(request!=''){
        this.requestNotificationNew=request
        this.marked1=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.oldAllRequestDeveloper(this.developer_data).subscribe(
      request=>{
        if(request!=''){
        this.requestNotificationOld=request
        this.marked2=true
        }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.newAllAcceptProReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accProReqNew=result
          this.marked1=true
          }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.oldAllAcceptProReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accProReqOld=result
          this.marked2=true
          }
      },
      err=>{
        console.log(err)
      }
    )

    this.authNot.newAllAcceptBidReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accBidReqNew=result
          this.marked1=true
          }
      },
      err=>{
        console.log(err)
      }
    )


    this.authNot.oldAllAcceptBidReq(this.developer_data).subscribe(
      result=>{
        if(result!=''){
          this.accBidReqOld=result
          this.marked2=true
          }
      },
      err=>{
        console.log(err)
      }
    )




  }


  viewClientRequest(not_ID:number){
    this.router.navigate(['/dev_home/notification/clientRequest'], { queryParams: { not_id:not_ID  } })
  }

  viewAccBidReq(not_ID:number){
    this.router.navigate(['/dev_home/notification/acceptedBidReq'], { queryParams: { not_id:not_ID  } })
  }

  viewAccProReq(not_ID:number){
    this.router.navigate(['/dev_home/notification/acceptedProReq'], { queryParams: { not_id:not_ID  } })
  }




  logout(){
    this.auth.logout()
    }


}
