import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload, userID } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-register',
  templateUrl: './cli-register.component.html',
  styleUrls: ['./cli-register.component.css']
})
export class CliRegisterComponent implements OnInit {
  ngOnInit() {}

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    user_type:'Client',
    email: '',
    password: '',
    gender: '',
    contact_no:'',
    isActivated: true
  };

  userData:userID={
    user_ID:0
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
          this.auth.cli_register(this.credentials).subscribe(
            () => {
              this.router.navigateByUrl("/");
            },
            err => {
              console.error(err);
            }
          );
  }

}
