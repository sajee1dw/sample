import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createHostListener } from '@angular/compiler/src/core';
import { SocketcommService } from '../chat/socketcomm.service';
import { AuthenticationService, TokenPayload } from '../user/authentication.service';



@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {

  constructor(private router: Router,private socketCommService: SocketcommService, private auth: AuthenticationService, ) { }
  public chat={
    rEmail:'',
    uName : '',
    uId : 0,
    rId : 0
  }

  userDetails={
    userEmail: ''
  }

  chatList

  ngOnInit() {
    if (localStorage.getItem('usertoken')) {
     {
      this.userDetails.userEmail=this.auth.getUserDetails().email
       this.socketCommService.loadChatList(this.userDetails).subscribe(res=>{
         this.chatList=res
        console.log(this.chatList);
       }
         
       )
     }




    } else {
      this.router.navigateByUrl('/')
    }
  }
  loadMessages(ChEmail,ChId){
    
    this.chat.rEmail = ChEmail;
    this.chat.rId = ChId;
    this.chat.uName = this.auth.getUserDetails().first_name;
    this.chat.uId = this.auth.getUserDetails().id;
    console.log("chosed email:"+this.chat.rEmail+' user name:'+this.chat.uName+' uId:'+this.chat.uId+' rid:'+this.chat.rId);
    this.socketCommService.checkStatus(this.chat);
  }
   
}
