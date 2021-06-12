import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.services';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public teste: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
  }

  save(){
    
  }

}
