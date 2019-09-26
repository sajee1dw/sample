import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, skillDetails, userID } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Component({
  selector: 'app-dev-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['./dev-profile.component.css']
})
export class DevProfileComponent implements OnInit {

  details: UserDetails
  skills: skillDetails

  marked1 = true
  marked2 = false
  marked3 = true
  marked4 = false

  web = false
  design = false
  writing = false
  data = false
  other =false

  profileImage:File = null
  id: number
  fileUrl: Url

  userData:userID={
    user_ID:0
  }

  constructor(private auth: AuthenticationService, private router: Router,private http: HttpClient) {}

  ngOnInit() {
    if(localStorage.getItem('usertoken')){
      this.marked1 = true
      this.marked2 = false
      this.auth.profile().subscribe(
        user => {
          this.details = user
        },
        err => {
          console.error(err)
        })

      this.auth.skillprofile().subscribe(
        skill => {
          this.skills = skill
          if(this.skills.web_skill!='')
            this.web =true
          if(this.skills.design_skill!='')
            this.design =true
          if(this.skills.writing_skill!='')
            this.writing =true
          if(this.skills.data_skill!='')
            this.data =true
          if(this.skills.other_skill!='')
            this.other =true
        },
        err => {
          console.error(err)
        })


        this.userData.user_ID = this.auth.getUserDetails().id;
        this.auth.checkProfile(this.userData).subscribe(
         res=>{
            this.fileUrl=res
          },
          err =>{
            
          }
        )

    }else{
      this.router.navigateByUrl("/");
    }
  }

  showEditProf(){
    this.marked1 = false
    this.marked2 = true
  }

  showEditSkill(){
    this.marked3 = false
    this.marked4 = true
  }

  cancleEditProfile(marked1,marked2){
    this.marked1 = marked1
    this.marked2 = marked2
  }

  cancleEditSkill(marked3,marked4){
    this.marked3 = marked3
    this.marked4 = marked4
  }

  onFileSelected(event){
    this.profileImage=<File>event.target.files[0]
  }


  Upload(){
    this.userData.user_ID = this.auth.getUserDetails().id;
    const fd = new FormData()
    fd.append('profileImage', this.profileImage,this.profileImage.name)
    
    this.auth.sendUserID(this.userData).subscribe(
      res=>{

      }
    )

    this.auth.uploadProfileImage(fd).subscribe(
      res=>{
        this.fileUrl=res
      }
    )

    window.location.reload();
  }

}
