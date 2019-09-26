import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { CliProfileComponent } from '../cli-profile/cli-profile.component';

@Component({
  selector: 'app-cli-edit-profile',
  templateUrl: './cli-edit-profile.component.html',
  styleUrls: ['./cli-edit-profile.component.css']
})
export class CliEditProfileComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    user_type:'',
    email: '',
    password: '',
    gender: '',
    contact_no:'',
    isActivated: true
  }

  details: UserDetails

  constructor(private auth: AuthenticationService, private router: Router, private clipro: CliProfileComponent) {}

  ngOnInit() {
    if(localStorage.getItem('usertoken')){
    this.auth.profile().subscribe(
        user => {
          this.details = user
          this.credentials.id = this.details.id
          this.credentials.first_name = this.details.first_name
          this.credentials.last_name = this.details.last_name
          this.credentials.user_type = this.details.user_type
          this.credentials.email = this.details.email
          this.credentials.password = this.details.password
          this.credentials.gender = this.details.gender
          this.credentials.contact_no = this.details.contact_no
        },
        err => {
          console.error(err)
    })
  }else{
    this.router.navigateByUrl('/')
  }
  }

  editProf(){

      this.auth.editProf(this.credentials).subscribe(
        () => {
         
        },
        err => {
          console.error(err)
        }
      )

        window.location.reload();
   
  }



  CancleEditProfile(){
    this.clipro.cancleEditProfile(true,false)
  }

}
