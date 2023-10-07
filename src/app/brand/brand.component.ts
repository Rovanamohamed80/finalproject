import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  constructor(private _productsService:ProductsService){}
  brandsData : Brands[]=[]
  ngOnInit(): void {
    this._productsService.getBrands().subscribe({
      next:(res) =>{
        this.brandsData= res.data
      }
    })
  }
}
