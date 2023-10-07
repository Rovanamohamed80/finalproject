import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token:string | null =''
  constructor(private _http:HttpClient) { 
    this.token =localStorage.getItem("userToken");
    
  }
  addProductToWishlist(id:string):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
     productId: id
    },
    {
     headers:{
       token:`${localStorage.getItem("userToken")}`
     }
     
    }
    )
   }
  getWishlist():Observable<any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }
  removeWishlist(id:string):Observable<any>{
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }
}
