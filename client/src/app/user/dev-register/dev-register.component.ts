import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-register',
  templateUrl: './dev-register.component.html',
  styleUrls: ['./dev-register.component.css']
})
export class DevRegisterComponent implements OnInit {
  

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    user_type:'Developer',
    email: '',
    password: '',
    gender: '',
    contact_no:'',
    isActivated: true
  };

  confirm_password:string = ''
  war1 = false

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(){}

  onCheck(){
  if(this.credentials.password != this.confirm_password){
    this.war1 = true
  }
  else{
    this.war1 = false
  }
}
  

  register() {
          this.auth.dev_register(this.credentials).subscribe(
            () => {
              window.alert("You have been registered successfully!")
                this.router.navigateByUrl("/profile-image");
            },
            err => {
              console.error(err);
            }
          )
  }


  checkMatch(){
    if(this.credentials.password!=this.confirm_password){
      return true;
    }else{
      return false;
    }
  }

}
