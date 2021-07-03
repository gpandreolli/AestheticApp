import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Costumer } from 'src/app/models/costumers.models';
import { DataService } from 'src/app/services/data.services';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-costumers-page',
  templateUrl: './costumers-page.component.html',
  styleUrls: ['./costumers-page.component.css']
})
export class CostumersPageComponent implements OnInit {

  public products$!: Observable<Costumer[]>;
  public form: FormGroup;
  public costumerId: string = uuidv4();

  constructor(
    private fb: FormBuilder,
    private service: DataService, 
  ) { 
    this.form = this.fb.group({
      costumerId:[this.costumerId],
      slug:[this.costumerId],
      costumerName:[''],
      coscumerName: [''],
      costumerCPF: [''], 
      costumerBirthDate: [],
      costumerGender: [''],
      costumerPhone: [''],      

    })
  }

  ngOnInit(): void {
  }

}
