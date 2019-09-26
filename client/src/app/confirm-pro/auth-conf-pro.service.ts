import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable()
export class AuthConfProService {

    constructor(private http: HttpClient, private router: Router){}

}