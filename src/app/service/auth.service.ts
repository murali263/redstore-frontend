import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  _auth:HttpClient) { }


  public RegisterUrl = "http://localhost:3000/api/register";



  adminregister(user){
  return this._auth.post<any>(this.RegisterUrl,user)
  }


}


