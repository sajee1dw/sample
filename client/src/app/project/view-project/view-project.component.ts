import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  AuthProjectService, ProjectPayload, ProjectDetails, BidPayload, BidDetails, ConfirmedPro} from '../auth-project.service'
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  pro_id: number;
  projects: ProjectDetails;
  bids: BidDetails
  marked1 = true
  marked2 =false
  marked3 = false
  marked4 = false

  credentials:ProjectPayload={
    id: 0,
    client_ID: 0,
    project_name:'',
    project_category: '',
    project_description:'',
    payment:''
  }

  credential:BidPayload={
    id: 0,
    project_ID: 0,
    maximum_value:'',
    start_date:''

  }

  confirmedPro: ConfirmedPro={
    id: 0,
    developer_ID:0,
    client_ID:0,
    project_ID:0,
    category: '',
    isCompleted: false
  }

  projectRequest;
  bidRequest;
  requestDeveloper;

  constructor(private router: Router, private authpro: AuthProjectService, private route: ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit() { 
    if(window.localStorage.getItem('usertoken')){

    this.route.queryParams.subscribe(params => {
      this.pro_id = params['pro_id'];
      this.credentials.id = this.pro_id
      this.credential.project_ID = this.pro_id
    })

      
      this.authpro.viewProject(this.credentials).subscribe(
        project=>{
          this.projects= project
          this.credentials.project_name = this.projects.project_name
          this.credentials.project_category = this.projects.project_category
          this.credentials.project_description = this.projects.project_description

          if(this.projects.payment==''){
            this.marked4 = true
            this.marked3 = false
            this.authpro.viewBid(this.credential).subscribe(
              bid=>{
                this.bids = bid
                this.credential.maximum_value = this.bids.maximum_value
                this.credential.start_date = this.bids.start_date
              }
            )

            this.authpro.viewBidRequest(this.credentials).subscribe(
              result=>{
                this.bidRequest = result
              }
            )

          }else{
            this.marked3 = true
            this.marked4 = false
            this.credentials.payment = this.projects.payment

            this.authpro.viewProjectRequest(this.credentials).subscribe(
              result=>{
                this.projectRequest = result
              }
            )
          }

          
          this.authpro.viewRequestDeveloper(this.credentials).subscribe(
            result=>{
              this.requestDeveloper = result
            }
          )
          

          

        },
        err => {
          console.error(err)
        }
      )

  }else{
    this.router.navigateByUrl('/');
  }
  }

  onClick(){
    this.marked1=false
    this.marked2=true
  }


  EditProject(){

    this.authpro.editProject(this.credentials).subscribe(
      () => {
                
      },
      err => {
        console.error(err);
      }
    )

    if(this.credentials.payment==''){
      this.authpro.editBid(this.credential).subscribe(
        () => {
      
        },
        err => {
          console.error(err);
        }
      )
    }

    window.location.reload();
  }

  CancleEditProject(){
    this.marked1=true
    this.marked2=false
  }


  deleteProject(){

      if(window.confirm('Do you want to delete the project')){
        this.authpro.deleteProject(this.credentials).subscribe(
          
        )
        this.router.navigateByUrl('/project')
      }
  }


  AcceptProReq(dev_ID:number, category: string){
    this.confirmedPro.developer_ID = dev_ID
    this.confirmedPro.client_ID = this.auth.getUserDetails().id
    this.confirmedPro.project_ID = this.credentials.id
    this.confirmedPro.category = category

    this.authpro.ConfirmedProject(this.confirmedPro).subscribe(
      ()=>{
        window.location.reload()
      }
    )

  }

  AcceptBidReq(dev_ID:number, category: string){
    this.confirmedPro.developer_ID = dev_ID
    this.confirmedPro.client_ID = this.auth.getUserDetails().id
    this.confirmedPro.project_ID = this.credentials.id
    this.confirmedPro.category = category
    
    this.authpro.ConfirmedProject(this.confirmedPro).subscribe(
      ()=>{
        window.location.reload()
      }
    )

  }


  logout(){
    this.auth.logout()
    }


}
