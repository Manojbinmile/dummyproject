import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:FormGroup|any;
  constructor(private router:Router, private toasterservice:ToastrService, private _http:HttpClient) { }
  singuser:any;
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname':new FormControl('',Validators.required),
      'lname':new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'phoneno': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    })
  }

  signdata(signup:FormGroup){
   // console.log(this.signup.value);
    this.singuser = this.signup.value.email;
    
    
    $('.form-box').css('display', 'block');
    this._http.post<any>("http://localhost:3000/signup", this.signup.value)
    .subscribe(res=>{
      this.toasterservice.success(this.singuser , 'You are Successfully Signup');
      this.signup.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("Something went wrong");
    })
  } 

  sbtn(){
    this.router.navigate(['login']);
    $('.form-box1').css('display', 'none');
    $('.form-box').css('display', 'block');
  }


}
