import { Component, OnInit } from '@angular/core';
import { AuthNotificationService, viewCliReq } from '../auth-notification.service';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { requestDetails } from 'src/app/home/auth-home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-dev-request',
  templateUrl: './view-dev-request.component.html',
  styleUrls: ['./view-dev-request.component.css']
})

export class ViewDevRequestComponent implements OnInit {

  request_data:viewCliReq={
    notification_ID:0,
    client_ID:0
  }

  Not_details:requestDetails

  constructor(private authNot: AuthNotificationService, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.request_data.client_ID = this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.request_data.notification_ID = params['not_id'];
    })

    this.authNot.viewRequestProject(this.request_data).subscribe(
      res=>{
        this.Not_details = res
      }
    )
  }

  logout(){
    this.auth.logout()
    }

}
