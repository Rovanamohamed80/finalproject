import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthService} from 'src/core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  apiError:string ='';
  constructor(private _authService:AuthService , private _router:Router){
  
  }
  
  loginForm: FormGroup= new FormGroup({

    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),

  })
  
  login(form:FormGroup){
    console.log(form);
    if(form.valid){
      this._authService.login(form.value).subscribe({
      next:(data:any) => {
      console.log(data);
      localStorage.setItem("userToken", data.token)
      this._authService.getUserData()
      this._router.navigate(['/home'])
      },
      error:(err:any) => {
        console.log(err.error.message);
        this.apiError = err.error.message;
      }
      })
  }
  }
}
