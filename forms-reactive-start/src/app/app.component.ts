import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Cthulu','yogSothoth'];
  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      }),
      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.trackingValueOrStatus('');
    this.settingAndPatching('');
  }
 
  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  
  forbiddenNames(control:FormControl):{[s:string]: boolean}{
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsforbidden':true};
    }
    return null;
  }

  forbiddenEmails(control:FormControl):Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reject)=>{
        setTimeout(()=>{
          if(control.value === 'test@test.com'){
            resolve({'emailIsForbidden': true});
          }else{
            resolve(null);
          }
        },2000);
      });
      return promise;
  }

  trackingValueOrStatus(obType:string){
    if(obType == 'value'){
      this.signupForm.valueChanges.subscribe((value)=> console.log(value));
    }else{
      this.signupForm.statusChanges.subscribe((status)=> console.log(status));
    }
  }

  settingAndPatching(data:string){
    if(data == 'whole'){
      this.signupForm.setValue({
        'userData':{
          'username':'fercho',
          'email':'frankdrujes@gmail.com'
        },
        'gender':'male',
        'hobbies':[]
      });
    }else{
      this.signupForm.patchValue({
        'userData':{
          'username':'franko',
        }
      });
    }
  }
  
}
