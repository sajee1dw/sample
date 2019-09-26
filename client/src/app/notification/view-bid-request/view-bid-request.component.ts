import { Component, OnInit } from '@angular/core';
import { AuthNotificationService, viewCliReq } from '../auth-notification.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { bidResponseDetails } from 'src/app/home/auth-home.service';

@Component({
  selector: 'app-view-bid-request',
  templateUrl: './view-bid-request.component.html',
  styleUrls: ['./view-bid-request.component.css']
})
export class ViewBidRequestComponent implements OnInit {


  request_data:viewCliReq={
    notification_ID:0,
    client_ID:0
  }

  Not_details:bidResponseDetails
  
  constructor(private authNot: AuthNotificationService, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.request_data.client_ID = this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.request_data.notification_ID = params['not_id'];
    })

    this.authNot.viewBidResponse(this.request_data).subscribe(
      res=>{
        this.Not_details = res
      }
    )
  }

  logout(){
    this.auth.logout()
    }

}
