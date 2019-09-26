import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { observable, Observable } from 'rxjs';
import { ResolvedStaticSymbol } from '@angular/compiler';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class SocketcommService implements OnInit{

  constructor(private http: HttpClient, private router: Router) { }
 
  private socket = io("http://localhost:3000");


  ngOnInit(){

  }

  online(email,name){
     this.socket.emit('new_joinee',{
       email : email,
       name : name
     })
  }
  offline(email,name){
    this.socket.emit('went_offline',{
      email : email,
      name : name
    })
 }
  //server_new_message
  serverNewMessage(){
    return new Observable((observer) =>{
      this.socket.on('server_new_message',(data)=>{
        observer.next(data);
      });
    })
  }

  serverJoinMsg(){
    return new Observable((observer) =>{
      this.socket.on('server_new_joinee',(data)=>{
        observer.next(data);
      });
    })
  }

  sendMessage(rEmail,rId,sId,sEmail,sName,msg){
    this.socket.emit('client_new_msg',{
      rEmail : rEmail,
      rId : rId,
      fId : sId,
      sEmail : sEmail,
      sName : sName,
      msg : msg
    })

  }
  checkStatus(check){
    
    this.socket.emit('checkStatus',{
      crEmail : check.rEmail,
      crName : check.uName,
      cuId : check.uId,
      crId : check.rId
    })
  }

  showStatus(){
    return new Observable((observer) =>{
      this.socket.on('user_status',(data)=>{
        observer.next(data);
      });
    })
  }
  public loadChatList(userdetails){
    return this.http.post('/users/Chat/loadChatList',userdetails);
  }

  public loadMsgHis(msgDetails){
    return this.http.post('/users/Chat/loadMsgHis',msgDetails);
       
  }

}
