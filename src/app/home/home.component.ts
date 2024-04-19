import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // constructor is used to inject dependencies such as services before the compenent is initialized.
  // additionally it can be used for intilization logic(like initializing properties)
  // but it is generally used to move all initializtion logic to lifecylcle hooks like ngOnInit
  constructor (
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService
    .getProducts('http://localhost:3000/clothes', {page: 0, perPage: 5})
    .subscribe((products: Products) => {
      console.log(products.items);
    })
  }
}
