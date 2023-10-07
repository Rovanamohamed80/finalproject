import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories-navbar',
  templateUrl: './categories-navbar.component.html',
  styleUrls: ['./categories-navbar.component.css']
})
export class CategoriesNavbarComponent implements OnInit {
constructor(private _productsService:ProductsService){}
categoryData : Category[]=[]
ngOnInit(): void {
  this._productsService.getCategories().subscribe({
    next:(res) =>{
      this.categoryData= res.data
    }
  })
}
}
