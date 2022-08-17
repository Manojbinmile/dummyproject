import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  steps:any=1;
  stepform:FormGroup|any;
  constructor(private _http:HttpClient, private toasterservice:ToastrService,) { }

  ngOnInit(): void {
    this.stepform = new FormGroup({
      'email': new FormControl(),
      'password':new FormControl(),
      'address':new FormControl(),
      'address2':new FormControl(),
      'city':new FormControl(),
      'state':new FormControl(),
      'zip':new FormControl(),
      'school':new FormControl(),
      'gpa':new FormControl(),
      'gra':new FormControl(),
      'checkme':new FormControl()
    })
  }

  submit(stepform:FormGroup){
   console.log(this.stepform.value);
   this._http.post<any>("http://localhost:3000/userdata", this.stepform.value)
   .subscribe(res=>{
    this.toasterservice.success(this.stepform.value.email , 'Your Data Submitted Successfully');
    this.stepform.reset();
    this.steps = this.steps=1;

   }, err=>{
      alert("Somthing Was Wrong");
   })
    
  }

  next(){
    this.steps = this.steps +1;
  }

  prev(){
    this.steps = this.steps -1;
  }

   

 
  

}
