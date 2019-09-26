import { Component, OnInit } from '@angular/core';
import { AuthHomeService } from '../auth-home.service'
import {  skillDetails } from '../../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-home',
  templateUrl: './cli-home.component.html',
  styleUrls: ['./cli-home.component.css']
})
export class CliHomeComponent implements OnInit {

  constructor(private authHome: AuthHomeService,private router: Router,) { }

  webDeveloper: skillDetails
  designer: skillDetails
  writer: skillDetails
  dataEnter: skillDetails

  ngOnInit() {

    this.authHome.webDeveloper().subscribe(
      user=>{
           this.webDeveloper= user
           console.log(this.webDeveloper)
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.designDeveloper().subscribe(
      user=>{
          this.designer= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.writingDeveloper().subscribe(
      user=>{
          this.writer= user
      },
      err => {
        console.error(err)
      }
    )

    this.authHome.dataDeveloper().subscribe(
      user=>{
          this.dataEnter= user
      },
      err => {
        console.error(err)
      }
    )
  }


  viewDeveloper(skillID:number,userID:number, typeID:number){
    this.router.navigate(['/cli_home/viewDeveloper'], { queryParams: { skill_id: skillID,user_id: userID,type_id: typeID } })
  }

}
