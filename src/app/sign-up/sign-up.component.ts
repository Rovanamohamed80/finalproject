import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthService} from 'src/core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

apiError:string ='';
constructor(private _authService:AuthService , private _router:Router){

}

registerForm: FormGroup= new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(3)]),
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  rePassword: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  phone: new FormControl('',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
},{
  validators:this.validateRepassword
})

register(form:FormGroup){
  console.log(form);
  if(form.valid){
    this._authService.register(form.value).subscribe({
    next:(data:any) => {
    console.log(data);
    this._router.navigate(['/login'])
    },
    error:(err:any) => {
      console.log(err.error.message);
      this.apiError = err.error.message;
    }
    })
} 
}
validateRepassword(registerForm:any){

  let passwordControl = registerForm.get("password")
  let rePasswordControl = registerForm.get("rePassword")

  if(passwordControl.value == rePasswordControl.value){
    return null;
  }else{
    rePasswordControl.setErrors({rePasswordNotMatch: "password and rePassword should be matched"})
    return {rePasswordNotMatch: "password and rePassword should be matched"}
  }

}
}