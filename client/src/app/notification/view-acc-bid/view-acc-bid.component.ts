import { Component, OnInit } from '@angular/core';
import { AuthNotificationService, viewDevReq } from '../auth-notification.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-view-acc-bid',
  templateUrl: './view-acc-bid.component.html',
  styleUrls: ['./view-acc-bid.component.css']
})
export class ViewAccBidComponent implements OnInit {

  constructor(private authNot: AuthNotificationService, private auth: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  request_data:viewDevReq={
    notification_ID:0,
    developer_ID:0
  }

  Not_details

  ngOnInit() {

    
    this.request_data.developer_ID = this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.request_data.notification_ID = params['not_id'];
    })

    this.authNot.viewAcceptBidReq(this.request_data).subscribe(
      result =>{
        this.Not_details = result
      }
    )
  }


  logout(){
    this.auth.logout()
    }


}
