import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthenticationService } from '../user/authentication.service';


export interface ViewProjectObject{
    project_ID: number,
    client_ID: number,
    developer_ID:number
}

export interface ViewDeveloperObject{
    user_ID: number,
    skill_ID: number
}


export interface bidResponseDetails{
    developer_ID: number,
    project_ID: number,
    bid_value: number,
    isViewed: boolean,
    isAccepted: boolean
}


export interface requestDetails{
    developer_ID: number,
    project_ID: number,
    isViewed: boolean,
    isAccepted: boolean
}

export interface requestDeveloperDetails{
    client_ID:number
    developer_ID: number,
    project_ID: number,
    isViewed: boolean,
    isAccepted: boolean
}


@Injectable()
export class AuthHomeService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}


    //developer

    public webProject(): Observable<any> {
        return this.http.get(`/users/dev_home/webProject`)
    }

    public designProject(): Observable<any> {
        return this.http.get(`/users/dev_home/designProject`)
    }

    public writingProject(): Observable<any> {
        return this.http.get(`/users/dev_home/writingProject`)
    }

    public dataProject(): Observable<any> {
        return this.http.get(`/users/dev_home/dataProject`)
    }

    public otherProject(): Observable<any> {
        return this.http.get(`/users/dev_home/otherProject`)
    }


    public dev_getProject(details: ViewProjectObject): Observable<any> {
        return this.http.post(`/users/dev_home/dev_getProject`,details)
    }

    public dev_getClient(details: ViewProjectObject): Observable<any> {
        return this.http.post(`/users/dev_home/dev_getClient`,details)
    }

    public dev_getBid(details: ViewProjectObject): Observable<any> {
        return this.http.post(`/users/dev_home/dev_getBid`,details)
    }


    public sendBid(bid:bidResponseDetails):Observable<any>{
        return this.http.post(`/users/dev_home/sendBid`,bid)
    }

    public getBid(bid: ViewProjectObject):Observable<any>{
        return this.http.post(`/users/dev_home/getBid`,bid)
    }

    public editBid(bid:bidResponseDetails):Observable<any>{
        return this.http.post(`/users/dev_home/editBid`,bid)
    }

    public deleteBid(bid: ViewProjectObject):Observable<any>{
        return this.http.post(`/users/dev_home/deleteBid`,bid)
    }

    public sendRequest(request:requestDetails):Observable<any>{
        return this.http.post(`/users/dev_home/sendRequest`,request)
    }


    public cancleRequest(request:requestDetails):Observable<any>{
        return this.http.post(`/users/dev_home/cancleRequest`,request)
    }

    public getRequest(request:ViewProjectObject):Observable<any>{
        return this.http.post(`/users/dev_home/getRequest`,request)
    }



    //client

    public webDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/webDeveloper`)
    }

    public designDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/designDeveloper`)
    }

    public writingDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/writingDeveloper`)
    }

    public dataDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/dataDeveloper`)
    }


    public cli_getDeveloper(details: ViewDeveloperObject): Observable<any> {
        return this.http.post(`/users/cli_home/cli_getDeveloper`,details)
    }

    public cli_getSkill(details: ViewDeveloperObject): Observable<any> {
        return this.http.post(`/users/cli_home/cli_getSkill`,details)
    }

    public cli_sendRequest(request:requestDeveloperDetails):Observable<any>{
        return this.http.post(`/users/cli_home/sendRequest`,request)
    }


    public cli_cancleRequest(request:requestDeveloperDetails):Observable<any>{
        return this.http.post(`/users/cli_home/cancleRequest`,request)
    }

    public cli_getAllRequest(request:requestDeveloperDetails):Observable<any>{
        return this.http.post(`/users/cli_home/getAllRequest`,request)
    }


}