import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.css']
})
export class ResetCodeComponent {

  apiError:string ='';
  statusMsg:string='';
    constructor(private _authService:AuthService, private _router:Router){
  
    }
    verfiyForm: FormGroup= new FormGroup({
  
      resetCode: new FormControl('',[Validators.required])
  
    })
  
    verifyCode(verifyCode:FormGroup){

      console.log(verifyCode);
      if(verifyCode.valid){
      this._authService.virefyCode(verifyCode.value).subscribe({
        next:(res)=>{
          console.log(res);
            this._router.navigate(['/resetPassword']);
        },
          error:(err:any) => {
            console.log(err.error.message);
            this.apiError=err.error.message
          }
      })
    }
      }
}
