import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService, SkillPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  credentials: SkillPayload = {

    web_skill1: '',
    web_skill2: '',
    web_skill3: '',
    web_skill4: '',
    web_skill5: '',
    web_skill6: '',

    design_skill1: '',
    design_skill2: '',
    design_skill3: '',
    design_skill4: '',
    design_skill5: '',
    design_skill6: '',

    writing_skill1: '',
    writing_skill2: '',
    writing_skill3: '',
    writing_skill4: '',
    writing_skill5: '',
    writing_skill6: '',

    data_skill1: '',
    data_skill2: '',
    data_skill3: '',
    data_skill4: '',
    
    other_skill: ''
  }

  skillObject = {
    id: 0,
    user_ID: 0,
    user_email: '',
    web_skill: '',
    design_skill: '',
    writing_skill: '',
    data_skill: '',
    other_skill: ''

  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  details: UserDetails

  ngOnInit() {
    if(localStorage.getItem('usertoken')){
    this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
    }else{
      window.alert('You should register as a developer before add skills')
      this.router.navigateByUrl("/dev_register");
    }
  }

  Skill(){ 

        this.skillObject.user_email = this.details.email
        this.skillObject.user_ID = this.details.id

        this.skillObject.other_skill = this.credentials.other_skill

        if(this.credentials.web_skill1=='1'){
            this.skillObject.web_skill= this.skillObject.web_skill + ' ' +'HTML'
        }
        if(this.credentials.web_skill2=='1'){
          this.skillObject.web_skill= this.skillObject.web_skill + ' ' +'PHP'
        }
        if(this.credentials.web_skill3=='1'){
          this.skillObject.web_skill= this.skillObject.web_skill + ' ' +'Javascript'
        }
        if(this.credentials.web_skill4=='1'){
          this.skillObject.web_skill= this.skillObject.web_skill + ' ' +'Angular'
        }
        if(this.credentials.web_skill5=='1'){
          this.skillObject.web_skill= this.skillObject.web_skill + ' ' +'Nodejs'
        }
        if(this.credentials.web_skill6=='1'){
          this.skillObject.web_skill= this.skillObject.web_skill + ' ' +'Java'
        }

        if(this.credentials.design_skill1=='1'){
          this.skillObject.design_skill= this.skillObject.design_skill + ' ' +'Photoshop'
        }
        if(this.credentials.design_skill2=='1'){
          this.skillObject.design_skill= this.skillObject.design_skill + ' ' +'Illustrator'
        }
        if(this.credentials.design_skill3=='1'){
          this.skillObject.design_skill= this.skillObject.design_skill + ' ' +'3DMax'
        }
        if(this.credentials.design_skill4=='1'){
          this.skillObject.design_skill= this.skillObject.design_skill + ' ' +'Maya'
        }
        if(this.credentials.design_skill5=='1'){
          this.skillObject.design_skill= this.skillObject.design_skill + ' ' +'Coreldraw'
        }
        if(this.credentials.design_skill6=='1'){
          this.skillObject.design_skill= this.skillObject.design_skill + ' ' +'AfterEffect'
        }

        if(this.credentials.writing_skill1=='1'){
          this.skillObject.writing_skill= this.skillObject.writing_skill + ' ' +'English'
        }
        if(this.credentials.writing_skill2=='1'){
          this.skillObject.writing_skill= this.skillObject.writing_skill + ' ' +'Tamil'
        }
        if(this.credentials.writing_skill3=='1'){
          this.skillObject.writing_skill= this.skillObject.writing_skill + ' ' +'Sinhala'
        }
        if(this.credentials.writing_skill4=='1'){
          this.skillObject.writing_skill= this.skillObject.writing_skill + ' ' +'Spanish'
        }
        if(this.credentials.writing_skill5=='1'){
          this.skillObject.writing_skill= this.skillObject.writing_skill + ' ' +'Korean'
        }
        if(this.credentials.writing_skill6=='1'){
          this.skillObject.writing_skill= this.skillObject.writing_skill + ' ' +'Japaneese'
        }

        if(this.credentials.data_skill1=='1'){
          this.skillObject.data_skill= this.skillObject.data_skill + ' ' +'Excel'
        }
        if(this.credentials.data_skill2=='1'){
          this.skillObject.data_skill= this.skillObject.data_skill + ' ' +'Mysql'
        }
        if(this.credentials.data_skill3=='1'){
          this.skillObject.data_skill= this.skillObject.data_skill + ' ' +'MongoDB'
        }
        if(this.credentials.data_skill4=='1'){
          this.skillObject.data_skill= this.skillObject.data_skill + ' ' +'MicrosoftSQL'
        }

          this.auth.addSkill(this.skillObject).subscribe(
            () => {
                this.router.navigateByUrl("/");
            },
            err => {
              console.error(err);
            }
          );
    }

    marked1 = false
    marked2 = false
    marked3 = false
    marked4 = false

    toggleVisibility1(e){
      this.marked1= e.target.checked;
    }
    toggleVisibility2(e){
      this.marked2= e.target.checked;
    }
    toggleVisibility3(e){
      this.marked3= e.target.checked;
    }
    toggleVisibility4(e){
      this.marked4= e.target.checked;
    }

}
