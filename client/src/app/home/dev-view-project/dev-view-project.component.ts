import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../user/authentication.service';
import { ProjectDetails,BidDetails } from '../../project/auth-project.service';
import { AuthHomeService, ViewProjectObject, bidResponseDetails, requestDetails } from '../auth-home.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dev-view-project',
  templateUrl: './dev-view-project.component.html',
  styleUrls: ['./dev-view-project.component.css']
})
export class DevViewProjectComponent implements OnInit {

  marked1=true
  marked2=false
  marked3=true
  marked4=false
  view1 = true
  view2 = false
  currentDate = new Date();
  newDate:Date
  diff:number
  

  constructor(private auth: AuthenticationService,private route: ActivatedRoute, private authHome: AuthHomeService) { }

  viewdetails: ViewProjectObject={
    project_ID: 0,
    client_ID : 0,
    developer_ID:0
  }


  credentials:bidResponseDetails={
    developer_ID: 0,
    project_ID: 0,
    bid_value: 0,
    isViewed: false,
    isAccepted: false
  }


  project: ProjectDetails
  client: UserDetails
  bid: BidDetails

  bids: bidResponseDetails

  requestProject:requestDetails={
    developer_ID:0,
    project_ID:0,
    isViewed: false,
    isAccepted: false
  }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.viewdetails.project_ID = params['pro_id'];
      this.viewdetails.client_ID = params['cli_id'];

      this.viewdetails.developer_ID=this.auth.getUserDetails().id

      this.authHome.dev_getProject(this.viewdetails).subscribe(
        project=>{
          this.project = project
          if(this.project.payment == ''){
            this.view1 = false
            this.view2 = true
            
            this.authHome.dev_getBid(this.viewdetails).subscribe(
              bid=>{
                this.bid = bid
                this.newDate = new Date(this.bid.start_date);
                this.diff =14 - Math.ceil((this.currentDate.valueOf() - this.newDate.valueOf())/(1000 * 3600 * 24));
              },
              err => {
                console.error(err)
              }
            )
          }
        },
        err => {
          console.error(err)
        }
      )

      this.authHome.dev_getClient(this.viewdetails).subscribe(
        user=>{
          this.client=user
        },
        err => {
          console.error(err)
        }
      )
      
    })

    
    this.authHome.getBid(this.viewdetails).subscribe(
      bid=>{
        this.bids=bid
          this.marked1=false
          this.marked2=true
        
      },
      err=>{
        console.error(err)
      }
      
    )

    
    this.authHome.getRequest(this.viewdetails).subscribe(
      request=>{
          this.marked3=false
          this.marked4=true
      },
      err=>{
        console.log(err)
      }
  )


  }


  logout(){
    this.auth.logout()
  }


  sendRequest(){

    this.requestProject.developer_ID=this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.requestProject.project_ID = params['pro_id'];
    })

    this.authHome.sendRequest(this.requestProject).subscribe(
        request=>{
          this.marked3=false
          this.marked4=true
        },
        err=>{
          console.log(err)
        }
    )
    
  }


  cancleRequest(){
    this.requestProject.developer_ID=this.auth.getUserDetails().id

    this.route.queryParams.subscribe(params => {
      this.requestProject.project_ID = params['pro_id'];
    })

    this.authHome.cancleRequest(this.requestProject).subscribe(
        request=>{
            this.marked3=true
            this.marked4=false
        },
        err=>{
          console.log(err)
        }
    )

  }

  
  

  sendBid(){
    this.credentials.developer_ID=this.auth.getUserDetails().id
 
    this.route.queryParams.subscribe(params => {
      this.credentials.project_ID = params['pro_id'];
    })

    this.authHome.sendBid(this.credentials).subscribe(
      bid=>{
        window.location.reload();
        
      },
      err=>{
        console.log(err)
      }
    )
  }


  bidAgain(){
    this.credentials.developer_ID=this.auth.getUserDetails().id
 
    this.route.queryParams.subscribe(params => {
      this.credentials.project_ID = params['pro_id'];
    })

    this.authHome.editBid(this.credentials).subscribe(
      ()=>{
        
      },
      err=>{
        console.log(err)
      }
    )

    window.location.reload();
  }


  deleteBid(){
    this.route.queryParams.subscribe(params => {
      this.viewdetails.project_ID = params['pro_id'];
      this.viewdetails.client_ID = params['cli_id'];
    })

    this.viewdetails.developer_ID=this.auth.getUserDetails().id

    this.authHome.deleteBid(this.viewdetails).subscribe(
      ()=>{

      },
      err=>{
        console.log(err)
      }
    )

    window.location.reload();
  }



}
