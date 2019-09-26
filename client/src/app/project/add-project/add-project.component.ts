import { Component, OnInit } from '@angular/core';
import {  AuthProjectService, ProjectPayload, BidPayload} from '../auth-project.service'
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  marked1 = false
  marked2 = false

  constructor(private authPro: AuthProjectService, private router: Router, private auth: AuthenticationService) { }

  details: UserDetails
  project_details: ProjectPayload
  bid_details: BidPayload

  ngOnInit() {
  }

  credentials:ProjectPayload={
    id: 0,
    client_ID: 0,
    project_name:'',
    project_category:'',
    project_description:'',
    payment:''

  }

  credential:BidPayload={
    id: 0,
    project_ID: 0,
    maximum_value:'',
    start_date:''

  }

  AddProject(){

    this.credentials.client_ID = this.auth.getUserDetails().id

    this.authPro.addProject(this.credentials).subscribe(
      project=>{
        this.project_details = project

        if(this.credential.maximum_value!=''){

          this.credential.project_ID= this.project_details.id
          this.authPro.addBid(this.credential).subscribe(
            bid =>{
              this.bid_details = bid
            }
          )
        }
        
      },
      err => {
        console.error(err)
      }
    )

    this.router.navigateByUrl('/project')

  }


  fixedPrice(){
    this.marked1 = true
    this.marked2 = false
  }

  startBid(){
    this.marked1 = false
    this.marked2 = true
  }

  logout(){
    this.auth.logout()
    }

}
