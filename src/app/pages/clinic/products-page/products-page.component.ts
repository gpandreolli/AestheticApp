import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  public form: FormGroup;


  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
    ) { 
      this.form = this.fb.group({
        prodName:['', ],
        prodSlug:[1,],
        prodBrand: ['',],
        prodMeasurement: ['',],
        prodAmount: ['',],
        prodVolume: ['',],
        prodWeight: ['',],
        prodPrice: [''],
        prodActive:[1,]
 
      });
    }

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
  }

  submit(){
    debugger;
    this.data.saveProducts(this.form.value)
        .subscribe(
          (data) => {
            this.toastr.success('produto cadastrado','Teste');
            this.router.navigate['/clinic/products']
          },
          (err) => {
            console.log(err);
          }
        );
    let formSave = document.getElementById('modalProducts');
      
  }

}
