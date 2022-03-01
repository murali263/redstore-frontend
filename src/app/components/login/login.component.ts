import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { combineLatest } from 'rxjs';
import {AuthService}from 'src/app/service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  adminForm = new FormGroup({
    fullname:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])

  })

  onSubmit(){
    console.log(this.adminForm)
    this._auth.adminregister(this.adminForm.value).subscribe(res=>console.log(res),err=>console.log('Error '+err))
  }
  ngOnInit() {
  }

}
