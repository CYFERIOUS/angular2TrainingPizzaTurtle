import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') dataForm;
  defaultQuestion = "pet";
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username:'',
    email:'',
    secretQuestion: '',
    answer:'',
    gender:''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*//whole form
    this.dataForm.setValue({
      userData:{
        username: suggestedName,
        email: '' 
      },
      secret: 'pet',
      questionAnswer:'petete',
      gender: 'male'

    });*/

    //part of the form
    this.dataForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }
  onSubmit(){
    
    this.submitted = true;
    this.user.username = this.dataForm.value.userData.username;
    this.user.email = this.dataForm.value.userData.email;
    this.user.secretQuestion = this.dataForm.value.secret;
    this.user.answer = this.dataForm.value.questionAnswer;
    this.user.gender = this.dataForm.value.gender;
    console.log(this.user);
    this.dataForm.reset();
  }
  /*onSubmit(form:NgForm){
    console.log(form);
  }*/
}
