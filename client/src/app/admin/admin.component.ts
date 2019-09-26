import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService,userID } from '../user/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { AuthAdminService } from './auth-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 devcount
 clicount
  
  constructor(private auth: AuthenticationService, private router: Router,private http: HttpClient,private authAdm: AuthAdminService) { }

  ngOnInit() {
    if(localStorage.getItem('usertoken'))
  {
    this.authAdm.countOfDev().subscribe(
      dev=>{
        this.devcount = dev
      }
    )
    this.authAdm.countOfCli().subscribe(
      cli=>{
        this.clicount = cli
      }
    )
  }
  else{
    this.router.navigateByUrl('/')
  }
  }

}
