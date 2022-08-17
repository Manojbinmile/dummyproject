import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userone:any;
  puser:any;
  closeResult: string = '';

  constructor(private router:Router, private procomp:LoginComponent) { }
  userdata:any;
  ngOnInit(): void {
    
    this.userone = this.procomp.data1;
   
  } 

 

  signout(){
    this.router.navigate(['login']);
    $('.form-box').css('display','block');
    
  }

  viewdetail( id:any){
    //this.router.navigate(['details']);
   
  }

}


