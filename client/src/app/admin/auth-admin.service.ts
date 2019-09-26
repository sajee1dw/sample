import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthenticationService } from '../user/authentication.service';

@Injectable()

export class AuthAdminService {

  constructor(private http: HttpClient, private router: Router) { }

  //send data to the backend

  public allClients(){
    return this.http.get(`/users/admin/getClients`)
  }

  public allDevelopers(){
    return this.http.get(`/users/admin/getDevelopers`)
  }
  
   public countOfDev(){
     return this.http.get(`/users/admin/countOfDev`)
   }

   public countOfCli(){
    return this.http.get(`/users/admin/countOfCli`)
  }
  public banedUser(banedEmail){
    return this.http.post(`/users/admin/banedUser`,banedEmail)
  }
}
