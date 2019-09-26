import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService,userID } from '../authentication.service';
import { Router } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-cli-profile',
  templateUrl: './cli-profile.component.html',
  styleUrls: ['./cli-profile.component.css']
})
export class CliProfileComponent implements OnInit {

  details: UserDetails

  marked1 = true
  marked2 = false

  profileImage:File = null
  id: number
  fileUrl: Url

  userData:userID={
    user_ID:0
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

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

  cancleEditProfile(marked1,marked2){
    this.marked1 = marked1
    this.marked2 = marked2
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
        console.log(this.fileUrl)
      }
    )

    window.location.reload();
  }

}
