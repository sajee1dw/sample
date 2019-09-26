import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../../user/authentication.service';
import { Router } from '@angular/router';
import {  AuthProjectService, ProjectPayload, ProjectDetails} from '../auth-project.service'

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  constructor(private authPro: AuthProjectService, private router: Router, private auth: AuthenticationService) { }

 projects: ProjectDetails

  ngOnInit() {
    if(window.localStorage.getItem('usertoken')){
    this.authPro.viewAllProject().subscribe(
      project => {
        this.projects = project
      },
      err => {
        console.error(err)
      }
    )
    }else{
      this.router.navigateByUrl("/")
    }
  }

  onClick(projectID:number){
    this.router.navigate(['/project/viewProject'], { queryParams: { pro_id: projectID } })
  }

}
