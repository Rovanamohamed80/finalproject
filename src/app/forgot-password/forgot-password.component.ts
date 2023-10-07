import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  apiError:string ='';
  constructor(private _authService:AuthService, private _router:Router){
  }
  forgotForm: FormGroup= new FormGroup({

    email: new FormControl('',[Validators.required, Validators.email])

  })

  forgotPassword(forgotForm:FormGroup){

  console.log(forgotForm);
  if(forgotForm.valid){
  this._authService.forgotPassword(forgotForm.value).subscribe({
     next:(res)=>{
      console.log(res);
      this._router.navigate(['/resetCode'])
    },
    error:(err:any) => {
      console.log(err.error.message);
      this.apiError = err.error.message;
    }
  })
  
  }}
}
