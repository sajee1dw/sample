import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, SkillPayload, skillDetails } from '../authentication.service';
import { Router } from '@angular/router';
import { DevProfileComponent } from '../dev-profile/dev-profile.component';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

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

  credential={
    web_skill: '',
    design_skill: '',
    writing_skill: '',
    data_skill: ''
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

  constructor(private auth: AuthenticationService, private router: Router, private devpro: DevProfileComponent) {}

  details: UserDetails
  skills: skillDetails

  marked1 = false
  marked2 = false
  marked3 = false
  marked4 = false

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

    this.auth.skillprofile().subscribe(
      skill => {
        this.skills= skill
        let str1 = this.skills.web_skill.split(' ')
        let str2 = this.skills.design_skill.split(' ')
        let str3 = this.skills.writing_skill.split(' ')
        let str4 = this.skills.data_skill.split(' ')

        if(this.skills.web_skill != ''){
              this.marked1 = true
              this.credential.web_skill = '1'
        }
        if(this.skills.design_skill != ''){
              this.marked2 = true
              this.credential.design_skill = '1'
        }
        if(this.skills.writing_skill != ''){
              this.marked3 = true
              this.credential.writing_skill = '1'
        }
        if(this.skills.data_skill != ''){
              this.marked4 = true
              this.credential.data_skill = '1'        
        }


        if(0<str1.indexOf("HTML"))
            this.credentials.web_skill1 = '1'
        if(0<str1.indexOf("PHP"))
            this.credentials.web_skill2 = '1'
        if(0<str1.indexOf("Javascript"))
            this.credentials.web_skill3 = '1';
        if(0<str1.indexOf("Angular"))
            this.credentials.web_skill4 = '1';
        if(0<str1.indexOf("Nodejs"))
            this.credentials.web_skill5 = '1';
        if(0<str1.indexOf("Java"))
            this.credentials.web_skill6 = '1';

        if(0<str2.indexOf('Photoshop'))
            this.credentials.design_skill1 = '1';
        if(0<str2.indexOf('Illustrator'))
            this.credentials.design_skill2 = '1';
        if(0<str2.indexOf("3DMax"))
            this.credentials.design_skill3 = '1';
        if(0<str2.indexOf("Maya"))
            this.credentials.design_skill4 = '1';
        if(0<str2.indexOf("Coreldraw"))
            this.credentials.design_skill5 = '1';
        if(0<str2.indexOf("AfetrEffect"))
            this.credentials.design_skill6 = '1';

        if(0<str3.indexOf('English'))
            this.credentials.writing_skill1 = '1';
        if(0<str3.indexOf('Tamil'))
            this.credentials.writing_skill2 = '1';
        if(0<str3.indexOf("Sinhala"))
            this.credentials.writing_skill3 = '1';
        if(0<str3.indexOf("Spanish"))
            this.credentials.writing_skill4 = '1';
        if(0<str3.indexOf("Korean"))
            this.credentials.writing_skill5 = '1';
        if(0<str3.indexOf("Japaneese"))
            this.credentials.writing_skill6 = '1';

        if(0<str4.indexOf('Excel'))
            this.credentials.data_skill1 = '1';
        if(0<str4.indexOf('Mysql'))
            this.credentials.data_skill2 = '1';
        if(0<str4.indexOf("MongoDB"))
            this.credentials.data_skill3 = '1';
        if(0<str4.indexOf("MicrosoftSQL"))
            this.credentials.data_skill4 = '1';

        this.credentials.other_skill = this.skills.other_skill
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

  updateSkill(){ 

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

          this.auth.updateSkill(this.skillObject).subscribe(
            () => {
                
            },
            err => {
              console.error(err);
            }
          )

          window.location.reload();
    }

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


    CancleEditSkill(){
      this.devpro.cancleEditSkill(true,false)
    }


}
