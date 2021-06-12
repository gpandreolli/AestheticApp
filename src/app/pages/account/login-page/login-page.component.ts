import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private service: DataService,
    private fb: FormBuilder
    ) {  
      this.form = this.fb.group({
        username:['', Validators.compose([
          Validators.minLength(8),
          Validators.required
        ])],
        password: ['',Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required
        ])]
      });

    }

  ngOnInit() {


    
  }

  submit(){
    
  }

 

}
