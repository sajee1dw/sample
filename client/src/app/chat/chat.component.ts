import { Component, OnInit } from '@angular/core';
import { SocketcommService } from './socketcomm.service';
import { AuthenticationService, TokenPayload } from '../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  static contentRf() {
    throw new Error("Method not implemented.");
  }
 
  constructor(private socketCommService: SocketcommService, private auth: AuthenticationService, private router: Router) { }
  
  chat={
    rEmail:'',
    rName : '',
    rId:0
  }
  msgDetails={
    sendId :0,
    recId :0
  }
  RTSmsg =false
  msgHistory
  Msg: any;
  cRef= false;
  s=false;

  private msg: string;
  private msgList: any[] = [];
  private status: any[] = [];
  private uuStatus;
  private reciverEmail : string;
  private reciverName : string;
  private reciverId : 0; 
  private senderId : 0; 
  private userName: string;
  private userId
  private userEmail: string;
  private CuSeMsg: any[] = [];

  
  ngOnInit() {
    if (localStorage.getItem('usertoken')) {
     
      this.userEmail=this.auth.getUserDetails().email
      this.userName=this.auth.getUserDetails().first_name
      this.userId=this.auth.getUserDetails().id
      console.log("email: "+this.userEmail+" name: "+this.userName)
      this.socketCommService.online(this.userEmail, this.userName)


      this.socketCommService.serverJoinMsg().subscribe(
        (res) => {
          console.log('server res status is', res)
          this.status.push(res)
          
         
        },
        (err) => {
          console.log('the error is ', err)

        }
        
      )
      
      this.socketCommService.serverNewMessage().subscribe(
        (res) => {
          console.log('server res is', res)
          this.msgList.push(res)
         
        },
        (err) => {
          console.log('the error is ', err)

        }
      )

      this.socketCommService. showStatus().subscribe(
        (res)=>{
          console.log("status is", res)
         
          this.uuStatus=res
          console.log("ustatus is:"+this.uuStatus.BEtStatus+' tname :'+this.uuStatus.BEfId+' tid '+this.uuStatus.BEtId )
          this.reciverEmail = this.uuStatus.BEtEmail
          this.reciverName = this.uuStatus.BEtName
          this.reciverId = this.uuStatus.BEtId
          this.senderId = this.uuStatus.BEfId
         
          if(this.uuStatus.BEtStatus==1){
               this.s=true;
          }else{
            this.s=false;
          }
          this.contentRf();
          console.log("ustatus is", this.s)
        }
      )


    }

    else {
      this.router.navigateByUrl('/')
    }
  }

  

  selectedUser(){
    this.socketCommService.checkStatus(this.chat);
    console.log('receiver email:'+this.chat.rEmail)
  }

  sendMessage() {
    //this.socketCommService.sendMessage(this.chat.rEmail, this.userEmail, this.userName, this.msg)
    
    console.log('on msg to:'+this.reciverEmail+' name:'+this.reciverName)
    this.socketCommService.sendMessage(this.reciverEmail,this.reciverId,this.senderId ,this.userEmail, this.reciverName, this.msg);
    this.CuSeMsg.push(this.msg);
    this.RTSmsg = true;
    
 
  }

  logout(){
    this.socketCommService.offline(this.userEmail, this.userName)
    this.auth.logout();
    window.location.reload();
    }
  contentRf(){
    
      this.msgList=[];
     console.log("refreched the content");
     this.cRef = true;
     this.loadMsgs();
  }
  loadMsgs(){
   this.msgDetails.sendId =  this.reciverId;
    this.msgDetails.recId = this.senderId;
    console.log('msgdetails:'+ this.msgDetails.sendId+' '+this.msgDetails.recId)
    this.socketCommService.loadMsgHis(this.msgDetails).subscribe(res=>{
      this.msgHistory=res
      console.log(this.msgHistory);
    }
     
    )
  }
}
