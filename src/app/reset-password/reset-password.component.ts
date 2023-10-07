import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  apiError:string ='';
  constructor(private _authService:AuthService , private _router:Router){
  
  }
  
  resetForm: FormGroup= new FormGroup({

    email: new FormControl('',[Validators.required, Validators.email]),
    newPassword: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),

  })
  
  resetPassword(form:FormGroup){
    console.log(form);
    if(form.valid){
      this._authService.resetPassword(form.value).subscribe({
      next:(res) => {
      console.log(res);
      if(res.token){
        this._router.navigate(['/login'])
      }
     
      },
      error:(err:any) => {
        console.log(err.error.message);
        this.apiError = err.error.message;
      }
      })
  }
  }

  }
