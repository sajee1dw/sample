import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  AuthProjectService, ProjectPayload, ProjectDetails, BidPayload, BidDetails} from '../auth-project.service'

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.component.html',
  styleUrls: ['./add-bid.component.css']
})
export class AddBidComponent implements OnInit {

  pro_id: number;

  credential: BidPayload={
    id: 0,
    project_ID : 0,
    maximum_value: '',
    start_date: ''
}

constructor(private router: Router, private authpro: AuthProjectService, private route: ActivatedRoute) { }


marked1 = false
marked2 = false
marked3 = true
marked4 = false
marked5 = true
marked6 = false


bids: BidDetails

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.pro_id = params['pro_id'];
      this.credential.project_ID = this.pro_id
  
      this.authpro.viewBid(this.credential).subscribe(
        bid => {
            this.bids = bid

            if(this.bids.id > 0 ){
              this.credential.maximum_value = this.bids.maximum_value

              this.marked1=false
              this.marked2=true
            }else{
              this.marked1=true
              this.marked2=false
            }
        },
        err => {
          console.error(err);
        }
      )
      })
  }

  
  SaveBid(){
    this.route.queryParams.subscribe(params => {
    this.pro_id = params['pro_id'];
    this.credential.project_ID = this.pro_id

    this.authpro.addBid(this.credential).subscribe(
      bid => {
            
      },
      err => {
        console.error(err);
      }
    )
    })

    window.location.reload(); 
  }

  StartBid(){
    this.marked3=false
    this.marked4=true
  }

  CancelStartBid(){
    this.marked3=true
    this.marked4=false
  }


  EditBid(){
    this.marked5=false
    this.marked6=true
  }

  CancelEditBid(){
    this.marked5=true
    this.marked6=false
  }


  UpdateBid(){

    this.authpro.editBid(this.credential).subscribe(
      () => {
    
      },
      err => {
        console.error(err);
      }
    )
    window.location.reload(); 
    
  }

}
