import { Component, Input, OnInit } from '@angular/core';
import { Product} from '../product';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../shared/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  implements OnInit{
 @Input() product:Product = {} as Product
 wishListData: string[]=[]
 constructor(private _cartService:CartService,private toastr: ToastrService,private _wishlistService:WishlistService){}
ngOnInit(): void {
    this._wishlistService.getWishlist().subscribe({
      next:(res)=>{

        const newData = res.data.map( (item:any)=>item.id )
        
        this.wishListData=newData;
      }
    })
  }
addProductToCart(id:string){
this._cartService.addProductToCart(id).subscribe({
  next:(res) => {
    this._cartService.numOfCartItems.next(res.numOfCartItems)
    this.toastr.success(res.message)
  }
})
}

addWishlist(id:string):void{
this._wishlistService.addProductToWishlist(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.toastr.success(res.message)
    this.wishListData=res.data;
  }
})

}

removeWish(id:string):void{
this._wishlistService.removeWishlist(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.toastr.success(res.message)
    this.wishListData=res.data;
  }
})
}


}
