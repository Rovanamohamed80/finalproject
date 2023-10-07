import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product} from '../product'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string='';
  productDetails:Product = {} as Product
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  constructor(private _activatedRoute:ActivatedRoute, private _productsService: ProductsService,
    private _cartService:CartService,private toastr: ToastrService){
  this._activatedRoute.paramMap.subscribe((res:any) =>{
    console.log(res.params.id);
    this.productId=res.params.id
  }
    )
  this._productsService.getProductById(this.productId).subscribe({
    next:(res) =>{
      console.log(res.data);
      this.productDetails=res.data
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
}
