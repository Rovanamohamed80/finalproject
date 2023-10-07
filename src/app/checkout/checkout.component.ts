import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartId:string = ''
 shippingAddress: FormGroup = new FormGroup({
  details: new FormControl('',[Validators.required, Validators.minLength(3)]),
  phone: new FormControl('',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city: new FormControl('',[Validators.required, Validators.minLength(3)])
 })

 constructor(private _cartService:CartService, private _activatedRoute:ActivatedRoute){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    this.cartId = res.params.cartId
    console.log(this.cartId);
    
  })
 }

 handleOnline(){
 this._cartService.generateOnlinePayment(this.cartId,this.shippingAddress.value).subscribe({
  next:(res) => {
    if(res.status == "success"){
      console.log(res.session.url);
      window.location.href = res.session.url

    }
    
  }
 })
 }
}
