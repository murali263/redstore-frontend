import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
{  path:'',
redirectTo:'/home',
pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'dashboard',component:DashboardComponent},
{path:'pagenotfound',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
export const myrouting = [
  HomeComponent,LoginComponent,RegisterComponent,DashboardComponent,PagenotfoundComponent
]
