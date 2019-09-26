import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'


export interface clientID{
    client_ID: number,
  };

  export interface developerID{
    developer_ID: number,
  };

  export interface viewDevReq{
    notification_ID:number,
    developer_ID: number,
  };

  export interface viewCliReq{
    notification_ID:number,
    client_ID: number,
  };

@Injectable()
export class AuthNotificationService {

  constructor(private http: HttpClient, private router: Router){}

  public newAllRequest(client_ID:clientID): Observable<any> {
    return this.http.post(`/users/cli_home/newAllRequest`, client_ID)
  }

  public oldAllRequest(client_ID:clientID): Observable<any> {
    return this.http.post(`/users/cli_home/oldAllRequest`, client_ID)
  }

  public newAllBid(client_ID:clientID): Observable<any> {
    return this.http.post(`/users/cli_home/newAllBid`, client_ID)
  }

  public oldAllBid(client_ID:clientID): Observable<any> {
    return this.http.post(`/users/cli_home/oldAllBid`, client_ID)
  }

  public newAllAcception(client_ID:clientID): Observable<any> {
    return this.http.post(`/users/cli_home/newAllAcception`, client_ID)
  }

  public oldAllAcception(client_ID:clientID): Observable<any> {
    return this.http.post(`/users/cli_home/oldAllAcception`, client_ID)
  }


  public newAllRequestDeveloper(developer_ID:developerID): Observable<any> {
    return this.http.post(`/users/dev_home/newAllRequestDeveloper`, developer_ID)
  }


  public oldAllRequestDeveloper(developer_ID:developerID): Observable<any> {
    return this.http.post(`/users/dev_home/oldAllRequestDeveloper`, developer_ID)
  }

  public viewRequestDeveloper(request_Data:viewDevReq): Observable<any> {
    return this.http.post(`/users/dev_home/viewRequestDeveloper`, request_Data)
  }

  public viewRequestProject(request_Data:viewCliReq): Observable<any> {
    return this.http.post(`/users/cli_home/viewProjectRequest`, request_Data)
  }

  public viewBidResponse(request_Data:viewCliReq): Observable<any> {
    return this.http.post(`/users/cli_home/viewBidResponse`, request_Data)
  }

  public acceptRequestDeveloper(accept_Data:viewDevReq): Observable<any> {
    return this.http.post(`/users/dev_home/notification/acceptRequest`, accept_Data)
  }

  public cancleAccept(accept_Data:viewDevReq): Observable<any> {
    return this.http.post(`/users/dev_home/notification/cancleAccept`, accept_Data)
  }

  public viewDevAccept(request_Data:viewCliReq): Observable<any> {
    return this.http.post(`/users/cli_home/viewDevAccept`, request_Data)
  }

  public newAllAcceptProReq(request_Data: developerID): Observable<any>{
    return this.http.post(`/users/dev_home/newAllAcceptProReq`,request_Data)
  }

  public oldAllAcceptProReq(request_Data: developerID): Observable<any>{
    return this.http.post(`/users/dev_home/oldAllAcceptProReq`,request_Data)
  }

  public newAllAcceptBidReq(request_Data: developerID): Observable<any>{
    return this.http.post(`/users/dev_home/newAllAcceptBidReq`,request_Data)
  }

  public oldAllAcceptBidReq(request_Data: developerID): Observable<any>{
    return this.http.post(`/users/dev_home/oldAllAcceptBidReq`,request_Data)
  }

  public viewAcceptBidReq(request_Data:viewDevReq): Observable<any>{
    return this.http.post(`/users/dev_home/viewAccBidReq`,request_Data)
  }

  public viewAcceptProReq(request_Data:viewDevReq): Observable<any>{
    return this.http.post(`/users/dev_home/viewAccProReq`,request_Data)
  }


}