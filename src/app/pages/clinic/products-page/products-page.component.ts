import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.services';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public form: FormGroup;
  public prodId: string = uuidv4();
    

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
    ) { 
      this.form = this.fb.group({
        prodName:['', ],
        prodId:[this.prodId, ],
        slug:[this.prodId,],
        prodBrand: ['', ],
        prodMeasurement: ['',],
        prodAmount: ['',],
        prodVolume: ['',],
        prodWeight: ['',],
        prodPrice: ['',],
        prodActive:[true,]
 
      });
    }

  ngOnInit(): void {
    this.products$ = this.service.getProducts();    

  }

  submit(){
    debugger;
    this.service.saveProducts(this.form.value)
        .subscribe(
          (data: any) => {
            this.toastr.success(data.message,'Teste');            
           
            debugger;
            let modalProducts = document.getElementById('modalProducts');
            modalProducts.hidden = true;
            this.router.navigate['/clinic/products'];
            this.ngOnInit();
          },
          (err) => {
            console.log(err);
          }
        );
    
      
  }

}
