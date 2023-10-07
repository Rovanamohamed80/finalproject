import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: BehaviorSubject<any> = new BehaviorSubject('')
  constructor(private _http: HttpClient, private _router:Router) { 
  if(localStorage.getItem("userToken")){
    this.getUserData()
  }
}

  getUserData() {

    let encodedToken = JSON.stringify(localStorage.getItem("userToken"));
    let encoded = jwtDecode(encodedToken);
    console.log(encoded);
    this.userData.next(encoded);
  }

  register(data:any) : Observable <any>{
  return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data)
  }

  login(data:any) : Observable <any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
    }
  
    logOut(){
      localStorage.removeItem("userToken");
      this.userData.next(null);
      this._router.navigate(['/login']);
    }


    forgotPassword(data:any) : Observable <any>{
      return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)
    }
    virefyCode(data:any) : Observable <any>{
      return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
    }
    resetPassword(data:any) : Observable <any>{
     return this._http.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
    }
}
