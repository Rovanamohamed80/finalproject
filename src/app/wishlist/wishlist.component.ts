import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../shared/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  allProduct:Product[]=[];
  searchKey: string = "";
  wishListData: string[]=[]
  numOfCartItems :  BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private _wishlistService:WishlistService,private toastr: ToastrService,private _cartService:CartService){}
ngOnInit(): void {
  this._wishlistService.getWishlist().subscribe({
    next:(res)=>{

      this.allProduct= res.data;

      const newData = res.data.map( (item:any)=>item.id )
      
      this.wishListData=newData;
      
      
    }
  })
}
addProductToCart(id:string){
  this._cartService.addProductToCart(id).subscribe({
    next:(res:any) => {
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
    })}

removeWish(id:string):void{
  this._wishlistService.removeWishlist(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.toastr.success(res.message)
      this.wishListData=res.data;
      this._wishlistService.getWishlist().subscribe({
        next:(res)=>{
         this.allProduct=res.data;
        }
      })
    }
  })
  }
}