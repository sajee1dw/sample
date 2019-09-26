import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthenticationService } from '../user/authentication.service';

export interface ProjectDetails{
    id: number
    client_ID: number
    project_name: string
    project_category: string
    project_description: string
    payment: string
    exp: number
    iat: number
}

export interface ProjectPayload{
    id: number
    client_ID: number
    project_name: string
    project_category: string
    project_description: string
    payment: string
}

export interface BidDetails{
    id: number
    project_ID: number
    maximum_value: string
    start_date: string
    exp: number
    iat: number
}

export interface BidPayload{
    id: number
    project_ID: number
    maximum_value: string
    start_date: string
}

export interface ConfirmedPro{
  id:number
  developer_ID: number
  client_ID: number
  project_ID: number
  category: string
  isCompleted: boolean
}


@Injectable()
export class AuthProjectService {

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

  public addProject(project:ProjectPayload): Observable<any> {
    return this.http.post(`/users/project/addProject`, project)
  }

  public viewAllProject(): Observable<any> {
    return this.http.get(`/users/viewAllProject`, {
        headers: { Authorization: ` ${this.auth.getToken()}` }
      })
  }

  public viewProject(project:ProjectPayload): Observable<any> {
    return this.http.post(`/users/project/viewProject`, project)
  }

  public editProject(project:ProjectPayload): Observable<any> {
    return this.http.post(`/users/project/editProject`, project)
  }

  public deleteProject(project:ProjectPayload): Observable<any> {
    return this.http.post(`/users/project/deleteProject`, project)
  }

  public addBid(bid:BidPayload): Observable<any> {
    return this.http.post(`/users/project/startBid`, bid)
  }


  public viewBid(bid:BidPayload): Observable<any> {
    return this.http.post(`/users/project/viewBid`, bid)
  }

  public editBid(bid:BidPayload): Observable<any> {
    return this.http.post(`/users/project/editBid`, bid)
  }

  public viewBidRequest(project:ProjectPayload):Observable<any>{
    return this.http.post(`/users/project/viewBidReq`,project)
  }

  public viewProjectRequest(project:ProjectPayload):Observable<any>{
    return this.http.post(`/users/project/viewProReq`,project)
  }

  public viewRequestDeveloper(project:ProjectPayload):Observable<any>{
    return this.http.post(`/users/project/viewReqDev`,project)
  }

  public ConfirmedProject(details: ConfirmedPro):Observable<any>{
    return this.http.post(`/users/project/acceptPro`, details)
  }


}