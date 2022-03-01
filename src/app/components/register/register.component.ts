import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/service/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _auth:AuthService) { }
errorMessage = "";
  ngOnInit(){
    this.onSubmit()
  }
  adminForm:FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  onSubmit(){

//console.log(this.adminForm.value)

this._auth.adminregister(this.adminForm.value)
.subscribe(Response=>{
  console.log(Response)

},
error=>{
  this.errorMessage = error;
})
  }
}
