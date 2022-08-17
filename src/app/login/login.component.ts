import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;
  constructor(private router:Router, private toasterservice:ToastrService, private _http:HttpClient) { }

  data1:any;
  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    })
    
  }



  logindata(login:FormGroup){
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password 
      });
      if(user){
        this.toasterservice.success(this.data1 , 'You are Successfully Login');
        this.login.reset();
        
        this.router.navigate(['dashboard']);
      }else{
        alert('User Not Found');
        this.router.navigate(['login']);
      }
    }, err=>{
      alert('Something was Wrong');
    })

    this.data1 = this.login.value.fname;
   // console.log(this.login.value);
    
   
    $('.form-box').css('display', 'none');
    
    //$('.alert').css('display','block').delay(1000).hide(0);
    //console.log(this.data1);
  }

  sbtn1(){
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }
}
